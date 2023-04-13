import classes from "./ProductItem.module.scss";

type Props = {
  name: string;
  price: number;
  image: string;
};

const ProductItem = ({ name, price, image }: Props) => {
  return (
    <div className={classes.root}>
      <div className={classes.image}>
        <img src={image} />
      </div>
      <div className={classes.item_details}>
        <h5>{name}</h5>
        <p>{`${price}$`}</p>
      </div>
    </div>
  );
};

export default ProductItem;
