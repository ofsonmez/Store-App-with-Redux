import { ADDITEM, UPDATEITEM, DELETEITEM, DESTROYITEM } from "./constants";

const CartReducer = (cartData, action) => {
  let newCart = { cart: [], cartItems: 0, cartPrice: 0, ...cartData };
  switch (action.type) {
    case ADDITEM:
      const d = action.payload.data;
      const q = action.payload.quantity;

      let existing = newCart.cart.find((item) => item.data.id === d.id);
      //console.log(existing);
      if (existing) {
        existing.quantity += q;
      } else {
        newCart.cart = [...newCart.cart, action.payload];
      }
      newCart.cartItems += q;
      newCart.cartPrice += d.price * q;
      return newCart;

    case UPDATEITEM:
      let selection1 = newCart.cart.find(
        (item) => item.data.id === action.payload.id
      );
      let temp = 0;
      if (selection1) {
        selection1.quantity++;
        temp++;
      }
      newCart.cartItems += temp;
      newCart.cartPrice += selection1.data.price;
      return newCart;

    case DELETEITEM:
      let selection = newCart.cart.find(
        (item) => item.data.id === action.payload.id
      );
      newCart.cartItems -= selection.quantity;
      newCart.cartPrice -= selection.quantity * selection.data.price;
      newCart.cart = newCart.cart.filter((item) => item !== selection);
      return newCart;

    case DESTROYITEM:
      let selection3 = newCart.cart.find(
        (item) => item.data.id === action.payload.id
      );

      newCart.cartPrice -= selection3.quantity * selection3.data.price;
      selection3.quantity = 0;
      newCart.cart = newCart.cart.filter((item) => item !== selection3);
      return newCart;

    default:
      return cartData || {};
  }
};

export default CartReducer;
