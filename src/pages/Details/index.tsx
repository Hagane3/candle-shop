import { useState } from "react";

import CartIcon from "../../components/UI/CartIcon/CartIcon";
import { useSelector } from "react-redux";
import classes from "./index.module.scss";

import arrowdown from "../../assets/icon/arrowdown.svg";
import OrderDetailsProduct from "./OrderDetailsProduct/OrderDetailsProduct";
import { CartItem } from "../../store/cart-slice";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const index = () => {
  const { totalAmount, cart } = useSelector((state: any) => state.cart);
  const [isDetailsActive, setIsDetailsActive] = useState(false);

  const toggleDetails = () => {
    setIsDetailsActive((prevState) => !prevState);
  };

  return (
    <main className={classes.root}>
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
      <Breadcrumbs />
    </main>
  );
};

export default index;
