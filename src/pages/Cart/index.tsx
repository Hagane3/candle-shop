import { Link, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addOrder } from "../../store/order-slice";
import { RootState } from "../../store";

import classes from "./index.module.scss";
import Button from "../../components/UI/Button/Button";
import CartItem from "./CartItem/CartItem";

const index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, totalAmount } = useSelector((state: RootState) => state.cart);
  const goToCheckoutHandler = () => {
    navigate("/order/details");
  };

  const addProductsToOrderHandler = () => {
    dispatch(addOrder({ products: cart, totalAmount: totalAmount }));
  };

  return (
    <main className={classes.root}>
      <header>
        <h1>Your cart items</h1>
        <Link to="/products" className={classes.back_btn}>
          Back to shopping
        </Link>
      </header>
      <div className={classes.cart}>
        <div className={classes.cart_labels}>
          <p>Product</p>
          <p>Price</p>
        </div>
        <div className={classes.cart_items}>
          {cart.map((item) => {
            return <CartItem key={item.id} product={item} type="cart" />;
          })}
        </div>
        <div className={classes.cart_amount}>
          <div className={classes.cart_amount_container}>
            <div className={classes.cart_subtotal}>
              <p>Sub-total</p>
              <p>{`$ ${totalAmount}`}</p>
            </div>
            <p className={classes.cart_hint}>
              Tax and shipping cost will be calculated later
            </p>
          </div>
          <div
            className={classes.btn_container}
            onClick={addProductsToOrderHandler}
          >
            <Button width={100} redirect={goToCheckoutHandler}>
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default index;
