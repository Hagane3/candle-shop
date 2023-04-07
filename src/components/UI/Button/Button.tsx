import React from "react";
import classes from "./Button.module.scss";

type Props = {
  children: React.ReactNode;
  width: number;
  showAllProducts?: () => void;
  redirect?: () => void;
  submit?: boolean;
};

const Button = ({
  children,
  width,
  showAllProducts,
  redirect,
  submit,
}: Props) => {
  return (
    <button
      className={classes.root}
      style={{ width: `${width}%` }}
      onClick={showAllProducts || redirect}
      type={submit ? "submit" : "button"}
    >
      {children}
    </button>
  );
};

export default Button;
