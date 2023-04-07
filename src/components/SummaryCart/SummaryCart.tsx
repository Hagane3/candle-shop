import React, { useState } from "react";

import classes from "./SummaryCart.module.scss";
import CartIcon from "../UI/CartIcon/CartIcon";
import arrowdown from "../../assets/icon/arrowdown.svg";
import { useSelector } from "react-redux";
import { CartItem } from "../../store/cart-slice";
import OrderDetailsProduct from "../SummaryCart/OrderDetailsProduct/OrderDetailsProduct";

const SummaryCart = () => {
  const { totalAmount, cart } = useSelector((state: any) => state.cart);
  const [isDetailsActive, setIsDetailsActive] = useState(false);

  const toggleDetails = () => {
    setIsDetailsActive((prevState) => !prevState);
  };

  return (
    <div className={classes.root}>
      <div className={classes.summary}>
        <CartIcon />
        <p onClick={toggleDetails}>
          See your order details{" "}
          <img
            src={arrowdown}
            className={`${isDetailsActive && classes.active}`}
          />
        </p>
        <span className={classes.amount}>{`$${totalAmount}`}</span>
      </div>

      <div
        className={`${classes.products} ${isDetailsActive && classes.active}`}
      >
        {cart.map((item: CartItem) => (
          <OrderDetailsProduct key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};
export default SummaryCart;
