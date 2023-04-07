import { useSelector } from "react-redux";

import classes from "./index.module.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import SummaryCart from "../../components/SummaryCart/SummaryCart";

const index = () => {
  const { order } = useSelector((state: any) => state.order);
  console.log(order);

  return (
    <main className={classes.root}>
      <SummaryCart />
      <Breadcrumbs />
      <div className={classes.summary_info}>
        <div className={classes.summary_contact}>
          <p>Contact</p>
          <span>{`${order.email}`}</span>
        </div>
        <span className={classes.line}> </span>
        <div className={classes.summary_shipping}>
          <p>Ship to</p>
          <span>{`${order.address}, ${order.postalCode}, ${order.region}, ${order.country}`}</span>
        </div>
      </div>
    </main>
  );
};

export default index;
