import classes from "./QuantityBox.module.scss";

const QuantityBox = ({ setQuantityHandler, quantity }: any) => {
  const increaseQuantity = () => {
    setQuantityHandler((prevState: number) => prevState + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantityHandler((prevState: number) => prevState - 1);
    }
  };

  return (
    <div className={classes.root}>
      <p>Quantity</p>
      <div className={classes.quantity}>
        <button onClick={decreaseQuantity} className={classes.decrease}>
          -
        </button>
        <span data-test-id="quantity-display">{quantity}</span>
        <button onClick={increaseQuantity} className={classes.increase}>
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityBox;
