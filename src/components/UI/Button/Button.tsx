import React from "react";
import classes from "./Button.module.scss";

type Props = {
  children: React.ReactNode;
};

const Button = ({ children }: Props) => {
  return <button className={classes.root}>{children}</button>;
};

export default Button;
