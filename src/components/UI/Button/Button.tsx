import React from "react";
import classes from "./Button.module.scss";

type Props = {
  children: React.ReactNode;
  width: number;
};

const Button = ({ children, width }: Props) => {
  return (
    <button className={classes.root} style={{ width: `${width}%` }}>
      {children}
    </button>
  );
};

export default Button;
