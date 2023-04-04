import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

import classes from "./index.module.scss";
import Button from "../../components/UI/Button/Button";
import CartItem from "./CartItem/CartItem";
import { useEffect } from "react";
import { calcTotalAmount } from "../../store/cart-slice";

const index = () => {
  const dispatch = useDispatch();
  const { cart, totalAmount } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    dispatch(calcTotalAmount());
  }, [cart]);

  return (
    <main className={classes.root}>
      <header>
        <h1>Your cart items</h1>
        <Link to="/" className={classes.back_btn}>
          Back to shopping
        </Link>
      </header>
      <div className={classes.cart}>
        <div className={classes.cart_labels}>
          <p>Product</p>
          <p>Price</p>
        </div>
        <div className={classes.cart_items}>
          {cart.map((item) => {
            return <CartItem key={item.id} product={item} />;
          })}
        </div>
        <div className={classes.cart_subtotal}>
          <p>Sub-total</p>
          <p>{`$ ${totalAmount}`}</p>
        </div>
        <p
          className={classes.cart_hint}
          onClick={() => console.log(totalAmount)}
        >
          Tax and shipping cost will be calculated later
        </p>
        <Button width={100}>Checkout</Button>
      </div>
    </main>
  );
};

export default index;
