import classes from "./index.module.scss";
import { useSelector } from "react-redux";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Form from "./Form/Form";
import SummaryCart from "../../components/SummaryCart/SummaryCart";
import CartItem from "../Cart/CartItem/CartItem";

const index = () => {
  const { cart } = useSelector((state: any) => state.cart);
  const { order } = useSelector((state: any) => state.order);
  return (
    <main className={classes.root}>
      <div className={classes.mobile_preview}>
        <SummaryCart />
      </div>
      <div className={classes.content}>
        <Breadcrumbs />
        <Form />
      </div>
      <div className={classes.desktop_preview}>
        {cart.map((item: any) => (
          <CartItem key={item.id} product={item} type="order" />
        ))}
        <div className={classes.total}>
          <p>Total:</p>
          <span>${order.totalAmount}</span>
        </div>
      </div>
    </main>
  );
};

export default index;
