import { useState } from "react";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import SummaryCart from "../../components/SummaryCart/SummaryCart";
import classes from "./index.module.scss";
import PaymentForm from "./PaymentForm/PaymentForm";
import PaymentConfirmed from "./PaymentConfirmed/PaymentConfirmed";
import Spinner from "../../components/UI/Spinner/Spinner";

import { useSelector } from "react-redux";

const index = () => {
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { order } = useSelector((state: any) => state.order);
  const state = useSelector((state: any) => state);

  console.log(state);

  return (
    <div className={classes.root}>
      <div className={classes.mobile}>
        <SummaryCart />
      </div>
      <Breadcrumbs />
      {isLoading ? (
        <Spinner />
      ) : isPaymentConfirmed ? (
        <PaymentConfirmed />
      ) : (
        <PaymentForm
          orderHandler={setIsPaymentConfirmed}
          loadingHandler={setIsLoading}
        />
      )}
    </div>
  );
};

export default index;
