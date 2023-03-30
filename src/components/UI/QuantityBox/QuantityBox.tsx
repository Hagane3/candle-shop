import React from "react";
import classes from "./QuantityBox.module.scss";

const QuantityBox = () => {
  return (
    <div className={classes.root}>
      <p>Quantity</p>
      <div className={classes.quantity}>
        <button>+</button>
        <span>1</span>
        <button>-</button>
      </div>
    </div>
  );
};

export default QuantityBox;
