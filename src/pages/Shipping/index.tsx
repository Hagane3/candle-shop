import { useSelector, useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";

import { addToOrder } from "../../store/order-slice";

import classes from "./index.module.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import SummaryCart from "../../components/SummaryCart/SummaryCart";
import Button from "../../components/UI/Button/Button";
import { useNavigate } from "react-router-dom";

type Inputs = {
  shipping: string;
};

const index = () => {
  const { order } = useSelector((state: any) => state.order);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(addToOrder(data));
    console.log(data);
    navigate("/order/payment");
  };

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
      <div className={classes.shipping_method}>
        <h3>Shipping method</h3>
        <form className={classes.shippings} onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.shipping_type}>
            <div className={classes.radio_label}>
              <input
                {...register("shipping")}
                type="radio"
                id="standard"
                name="shipping"
                value="standard"
                checked
              />
              <label htmlFor="standard">Standard Shipping</label>
            </div>
            <span>Free</span>
          </div>
          <span className={classes.line}> </span>
          <div className={classes.shipping_type}>
            <div className={classes.radio_label}>
              <input
                {...register("shipping")}
                type="radio"
                id="priority"
                name="shipping"
                value="priority"
              />
              <label htmlFor="priority">Priority Shipping</label>
            </div>
            <span>$10</span>
          </div>
          <div className={classes.btn_container}>
            <Button submit={true} width={100}>
              Go to payment
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default index;