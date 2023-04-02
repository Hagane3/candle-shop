import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "../../store";

import classes from "./index.module.scss";
import Button from "../../components/UI/Button/Button";
import CartItem from "./CartItem/CartItem";

const index = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  console.log(cart);
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
            console.log(item);
            return <CartItem key={item.id} product={item} />;
          })}
        </div>
        <div className={classes.cart_subtotal}>
          <p>Sub-total</p>
          <p>$9.99</p>
        </div>
        <p className={classes.cart_hint}>
          Tax and shipping cost will be calculated later
        </p>
        <Button width={100}>Checkout</Button>
      </div>
    </main>
  );
};

export default index;
