import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./QuantityBoxCart.module.scss";
import { calcTotalAmount } from "../../../store/cart-slice";

import {
  decreaseProductQuantity,
  increaseProductQuantity,
} from "../../../store/cart-slice";

type QuantityBoxProps = {
  prodId: number;
};

const QuantityBox = ({ prodId }: QuantityBoxProps) => {
  const { cart } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calcTotalAmount());
  }, [cart]);

  const productQuantity = cart.find((item: any) => item.id === prodId).quantity;

  const increaseQuantity = () => {
    dispatch(increaseProductQuantity(prodId));
  };

  const decreaseQuantity = () => {
    if (productQuantity > 1) {
      dispatch(decreaseProductQuantity(prodId));
    }
  };

  return (
    <div className={classes.root}>
      <p>Quantity</p>
      <div className={classes.quantity}>
        <button onClick={decreaseQuantity} className={classes.decrease}>
          -
        </button>
        <span>{productQuantity}</span>
        <button onClick={increaseQuantity} className={classes.increase}>
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityBox;
