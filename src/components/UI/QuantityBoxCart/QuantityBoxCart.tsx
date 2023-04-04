import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./QuantityBoxCart.module.scss";

import {
  decreaseProductQuantity,
  increaseProductQuantity,
} from "../../../store/cart-slice";

type QuantityBoxProps = {
  prodId: number;
};

const QuantityBox = ({ prodId }: QuantityBoxProps) => {
  // const [quantity, setQuantity] = useState(1);
  const { cart } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const item = cart.find((item: any) => item.id === prodId);
  //   setQuantity(item.quantity);
  // }, []);

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
        <button onClick={increaseQuantity}>+</button>
        <span>{productQuantity}</span>
        <button onClick={decreaseQuantity}>-</button>
      </div>
    </div>
  );
};

export default QuantityBox;
