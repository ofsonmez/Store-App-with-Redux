import React from "react";
import { Link } from "@reach/router";
import { useSelector } from "react-redux";

const Header = () => {
  const totalQty = useSelector((state) => state.cart.cartItems);
  return (
    <div className="header">
      <div>
        <Link to="/">
          <h1>My Store</h1>
        </Link>
      </div>
      <div>
        <Link className="ui button primary" to="cart">
          Cart: {totalQty}
        </Link>
      </div>
    </div>
  );
};

export default Header;
