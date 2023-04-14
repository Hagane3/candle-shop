import classes from "./CartItem.module.scss";
import QuantityBoxCartOrder from "../../../components/UI/QuantityBoxCartOrder/QuantityBoxCartOrder";
import { useDispatch } from "react-redux";
import { removeFromCart, calcTotalAmount } from "../../../store/cart-slice";

const CartItem = ({ product, type }: any) => {
  const dispatch = useDispatch();

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(product.id));
    dispatch(calcTotalAmount());
  };

  return (
    <div className={classes.root}>
      <div className={classes.image_container}>
        <img src={product.image} alt={product.name}></img>
      </div>
      <div className={classes.details}>
        <div className={classes.item_container}>
          <h3>{product.name}</h3>
          <p>{product.subscription}</p>
          <p className={classes.remove} onClick={removeFromCartHandler}>
            Remove
          </p>
        </div>
        <div className={classes.price_container}>
          <p className={classes.price}>{`$${product.price}`}</p>
          <div className={classes.quantity_box}>
            <QuantityBoxCartOrder prodId={product.id} type={type} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
