import { useEffect, useState } from "react";
import classes from "./QuantityBox.module.scss";

const QuantityBox = ({ setQuantityHandler, quantity }: any) => {
  const increaseQuantity = () => {
    setQuantityHandler((prevState: number) => prevState + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantityHandler((prevState: number) => prevState - 1);
    }
  };

  return (
    <div className={classes.root}>
      <p>Quantity</p>
      <div className={classes.quantity}>
        <button onClick={increaseQuantity}>+</button>
        <span>{quantity}</span>
        <button onClick={decreaseQuantity}>-</button>
      </div>
    </div>
  );
};

export default QuantityBox;
