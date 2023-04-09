import classes from "./PaymentConfirmed.module.scss";
import checkcircle from "../../../assets/icon/checkcircle.svg";
import Button from "../../../components/UI/Button/Button";
import { useNavigate } from "react-router-dom";

const PaymentConfirmed = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.root}>
      <img src={checkcircle} className={classes.icon} />
      <h2>Payment Confirmed</h2>
      <p className={classes.orderNumber}>ORDER #2039</p>
      <p className={classes.notify_text}>
        Thank you Joe for buying Candleaf. The nature is grateful to you. Now
        that your order is confirmed it will be ready to ship in 2 days. Please
        check your inbox in the future for your order updates.
      </p>
      <div className={classes.button_container}>
        <Button width={100} redirect={() => navigate("/")}>
          Back to shopping
        </Button>
      </div>
    </div>
  );
};

export default PaymentConfirmed;
