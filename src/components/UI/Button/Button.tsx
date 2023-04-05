import React from "react";
import classes from "./Button.module.scss";

type Props = {
  children: React.ReactNode;
  width: number;
  showAllProducts?: () => void;
  redirect?: () => void;
};

const Button = ({ children, width, showAllProducts, redirect }: Props) => {
  return (
    <button
      className={classes.root}
      style={{ width: `${width}%` }}
      onClick={showAllProducts || redirect}
    >
      {children}
    </button>
  );
};

export default Button;
