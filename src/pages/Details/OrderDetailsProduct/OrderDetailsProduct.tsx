import classes from "./OrderDetailsProduct.module.scss";
import { CartItem } from "../../../store/cart-slice";

const OrderDetailsProduct = ({ product }: { product: CartItem }) => {
  console.log(product);
  return (
    <div className={classes.root}>
      <img src={product.image} />
      <p>{product.name}</p>
      <span>{`${product.quantity}x`}</span>
    </div>
  );
};

export default OrderDetailsProduct;
