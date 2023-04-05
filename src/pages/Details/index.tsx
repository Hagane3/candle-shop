import CartIcon from "../../components/UI/CartIcon/CartIcon";
import { useSelector } from "react-redux";
import classes from "./index.module.scss";

import arrowdown from "../../assets/icon/arrowdown.svg";

const index = () => {
  const { totalAmount } = useSelector((state: any) => state.cart);

  return (
    <main className={classes.root}>
      <div className={classes.summary_product}>
        <CartIcon />
        <p>
          See your order details <img src={arrowdown} />
        </p>
        <span className={classes.amount}>{`$${totalAmount}`}</span>
      </div>
    </main>
  );
};

export default index;
