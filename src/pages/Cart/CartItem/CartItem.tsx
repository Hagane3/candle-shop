import classes from "./CartItem.module.scss";
import QuantityBoxCart from "../../../components/UI/QuantityBoxCart/QuantityBoxCart";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../store/cart-slice";

const CartItem = ({ product }: any) => {
  const dispatch = useDispatch();

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className={classes.root}>
      <div className={classes.image_container}>
        <img src={product.image} alt={product.name}></img>
      </div>
      <div className={classes.details}>
        <div className={classes.item_container}>
          <h3>{product.name}</h3>
          <p className={classes.remove} onClick={removeFromCartHandler}>
            Remove
          </p>
        </div>
        <div className={classes.price_container}>
          <p className={classes.price}>{`$${product.price}`}</p>
          <div className={classes.quantity_box}>
            <QuantityBoxCart prodId={product.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
