import React from "react";

import classes from "./CartItem.module.scss";
import QuantityBox from "../../../components/UI/QuantityBox/QuantityBox";

import image1 from "../../../assets/img/candles/clean-lavander.png";

const CartItem = () => {
  return (
    <div className={classes.root}>
      <div className={classes.image_container}>
        <img src={image1} alt="clean lavander"></img>
      </div>
      <div className={classes.item_container}>
        <h3>Spiced Mint Candleaf</h3>
        <p className={classes.remove}>Remove</p>
      </div>
      <div className={classes.price_container}>
        <p className={classes.price}>$9.99</p>
        <div className={classes.quantity_box}>
          <QuantityBox />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
