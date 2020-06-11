import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateItem, destroy, deleteItem } from "../store/actions";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <table className="cart">
      <thead>
        <tr>
          <th></th>
          <th>Item</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.cart.map((item) => (
          <tr key={item.data.id}>
            <td className="actions">
              <div className="ui buttons mini">
                <button
                  onClick={() => {
                    dispatch(deleteItem(item.data));
                  }}
                  className="ui button"
                >
                  -
                </button>
                <button
                  className="ui button positive"
                  onClick={() => {
                    dispatch(updateItem(item.data));
                  }}
                >
                  +
                </button>
                <button
                  className="ui button negative"
                  onClick={() => {
                    dispatch(destroy(item.data));
                  }}
                >
                  x
                </button>
              </div>
            </td>
            <td>{item.data.id}</td>
            <td>{item.data.price}</td>
            <td>{item.quantity}</td>
            <td>${item.quantity * item.data.price}</td>
          </tr>
        ))}
        <tr>
          <td colSpan="4" style={{ textAlign: "right" }}>
            Total:
          </td>
          <td>${cartItems.cartPrice}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Cart;
