import { useState } from "react";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import SummaryCart from "../../components/SummaryCart/SummaryCart";
import classes from "./index.module.scss";
import PaymentForm from "./PaymentForm/PaymentForm";
import PaymentConfirmed from "./PaymentConfirmed/PaymentConfirmed";

const index = () => {
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(true);

  return (
    <div className={classes.root}>
      <SummaryCart />
      <Breadcrumbs />
      {isPaymentConfirmed ? <PaymentConfirmed /> : <PaymentForm />}
    </div>
  );
};

export default index;
