import { useSelector, useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { addToOrder } from "../../store/order-slice";

import Button from "../../components/UI/Button/Button";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import SummaryCart from "../../components/SummaryCart/SummaryCart";
import classes from "./index.module.scss";

type Inputs = {
  cardNumber: string;
  holderName: string;
  expiration: string;
  ccv: string;
  billingAddress: string;
};

const index = () => {
  const dispatch = useDispatch();

  const { order } = useSelector((state: any) => state.order);

  const schema = yup.object().shape({
    cardNumber: yup.string().required(),
    holderName: yup.string().required(),
    expiration: yup.string().required(),
    ccv: yup.string().length(3).required(),
    billingAddress: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(addToOrder({ payment: { ...data } }));
  };

  return (
    <div className={classes.root}>
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
        <span className={classes.line}> </span>
        <div className={classes.summary_method}>
          <p>Method</p>
          <span>{`${order.shipping}`}</span>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.payment}>
        <h3>Payment method</h3>
        <div className={classes.card_details}>
          <div>
            <input {...register("cardNumber")} placeholder="Card Number" />
            {errors.cardNumber && (
              <p className={classes.error}>{errors.cardNumber.message}</p>
            )}
          </div>
          <div>
            <input {...register("holderName")} placeholder="Holder Name" />
            {errors.holderName && (
              <p className={classes.error}>{errors.holderName.message}</p>
            )}
          </div>
          <div className={classes.divide}>
            <div>
              <input
                {...register("expiration")}
                placeholder="Expiration (MM/YY)"
              />
              {errors.expiration && (
                <p className={classes.error}>{errors.expiration.message}</p>
              )}
            </div>
            <div>
              <input {...register("ccv")} placeholder="CCV" />
              {errors.ccv && (
                <p className={classes.error}>{errors.ccv.message}</p>
              )}
            </div>
          </div>
        </div>
        <h3>Billing address</h3>
        <div className={classes.billing_address}>
          <div className={classes.billing_item}>
            <input
              {...register("billingAddress")}
              type="radio"
              id="shipping"
              value="The same as shipping address"
              checked
            />
            <label htmlFor="shipping">Priority Shipping</label>
          </div>
        </div>
        <div className={classes.btn_container}>
          <Button width={100} submit={true}>
            Pay now
          </Button>
        </div>
      </form>
    </div>
  );
};

export default index;
