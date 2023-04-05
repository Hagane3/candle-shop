import classes from "./CartIcon.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import cartIcon from "../../../assets/icon/cartIcon.svg";

const CartIcon = () => {
  const { cart } = useSelector((state: any) => state.cart);
  console.log(cart.reduce((acc: number, item: any) => acc + item.quantity, 0));

  const cartQuantity = cart.reduce(
    (acc: number, item: any) => acc + item.quantity,
    0
  );

  return (
    <div className={classes.root}>
      <Link to="/cart">
        <img src={cartIcon} alt="cart button" />
        {cartQuantity > 0 && (
          <div className={classes.quantity_counter}>
            <span>{cartQuantity}</span>
          </div>
        )}
      </Link>
    </div>
  );
};

export default CartIcon;
