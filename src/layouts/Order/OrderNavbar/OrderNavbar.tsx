import classes from "./OrderNavbar.module.scss";
import Logo from "../../../components/UI/Logo/Logo";

const OrderNavbar = () => {
  return (
    <nav className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.logo}>
          <Logo />
        </div>
      </div>
    </nav>
  );
};

export default OrderNavbar;
