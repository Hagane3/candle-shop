import classes from "./Breadcrumbs.module.scss";
import { Link, useLocation } from "react-router-dom";
import arrowbreadcrumbs from "../../assets/icon/arrowbreadcrumbs.svg";

const Breadcrumbs = () => {
  const location = useLocation();

  return (
    <div className={classes.root}>
      <Link
        to="/cart"
        className={`${classes.link} ${
          location.pathname === "/cart" ? classes.active : ""
        }`}
      >
        Cart
      </Link>
      <img src={arrowbreadcrumbs} alt="arrow breadcrumbs" />
      <Link
        to="/order/details"
        className={`${classes.link} ${
          location.pathname === "/order/details" ? classes.active : ""
        }`}
      >
        Details
      </Link>
      <img src={arrowbreadcrumbs} alt="arrow breadcrumbs" />
      <Link
        to="/order/shipping"
        className={`${classes.link} ${
          location.pathname === "/order/shipping" ? classes.active : ""
        }`}
      >
        Shipping
      </Link>
      <img src={arrowbreadcrumbs} alt="arrow breadcrumbs" />
      <Link
        to="/order/shipping"
        className={`${classes.link} ${
          location.pathname === "/order/shipping" ? classes.active : ""
        }`}
      >
        Payment
      </Link>
    </div>
  );
};

export default Breadcrumbs;
