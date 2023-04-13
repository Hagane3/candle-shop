import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import classes from "./PaymentForm.module.scss";
import { addToOrder } from "../../../store/order-slice";
import Button from "../../../components/UI/Button/Button";

type Inputs = {
  cardNumber: string;
  holderName: string;
  expiration: string;
  ccv: string;
  billingAddress: string;
};

type Props = {
  orderHandler: (value: boolean) => void;
  loadingHandler: (value: boolean) => void;
};

const PaymentForm = ({ orderHandler, loadingHandler }: Props) => {
  const { order } = useSelector((state: any) => state.order);
  const dispatch = useDispatch();

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
    loadingHandler(true);
    dispatch(
      addToOrder({ payment: { ...data }, id: (Math.random() * 100).toFixed() })
    );
    loadingHandler(false);
    orderHandler(true);
  };

  return (
    <div className={classes.root}>
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
            <label htmlFor="shipping">{order.shipping}</label>
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

export default PaymentForm;
