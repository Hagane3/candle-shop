import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./QuantityBoxCartOrder.module.scss";

import {
  decreaseProductQuantity,
  increaseProductQuantity,
  calcTotalAmount,
} from "../../../store/cart-slice";

import {
  decreaseOrderProductQuantity,
  increaseOrderProductQuantity,
  calcOrderAmount,
} from "../../../store/order-slice";

type QuantityBoxProps = {
  prodId: number;
  type: string;
};

const QuantityBoxCartOrder = ({ prodId, type }: QuantityBoxProps) => {
  const [productQuantity, setProductQuantity] = useState(1);
  const { cart } = useSelector((state: any) => state.cart);
  const { order } = useSelector((state: any) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "cart") {
      setProductQuantity(cart.find((item: any) => item.id === prodId).quantity);
      dispatch(calcTotalAmount());
    } else if (type === "order") {
      setProductQuantity(
        order.products.find((item: any) => item.id === prodId).quantity
      );
      dispatch(calcOrderAmount());
    }
  }, [cart, order]);

  const increaseQuantity = () => {
    if (type === "cart") {
      dispatch(increaseProductQuantity(prodId));
    } else if (type === "order") {
      dispatch(increaseOrderProductQuantity(prodId));
    }
  };

  const decreaseQuantity = () => {
    if (productQuantity > 1) {
      if (type === "cart") {
        dispatch(decreaseProductQuantity(prodId));
      } else if (type === "order") {
        dispatch(decreaseOrderProductQuantity(prodId));
      }
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

export default QuantityBoxCartOrder;
