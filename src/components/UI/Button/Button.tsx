import React from "react";
import classes from "./Button.module.scss";

type Props = {
  children: React.ReactNode;
  width: number;
  showAllProducts?: () => void;
};

const Button = ({ children, width, showAllProducts }: Props) => {
  return (
    <button
      className={classes.root}
      style={{ width: `${width}%` }}
      onClick={showAllProducts}
    >
      {children}
    </button>
  );
};

export default Button;
