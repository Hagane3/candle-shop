import classes from "./CartItem.module.scss";
import QuantityBoxCart from "../../../components/UI/QuantityBoxCart/QuantityBoxCart";

import image1 from "../../../assets/img/candles/clean-lavander.png";

const CartItem = ({ product }: any) => {
  console.log(product);
  return (
    <div className={classes.root}>
      <div className={classes.image_container}>
        <img src={product.image} alt={product.name}></img>
      </div>
      <div className={classes.item_container}>
        <h3>{product.name}</h3>
        <p className={classes.remove}>Remove</p>
      </div>
      <div className={classes.price_container}>
        <p className={classes.price}>{`$${product.price}`}</p>
        <div className={classes.quantity_box}>
          <QuantityBoxCart prodId={product.id} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
