import React from "react";
import Benefits from "./Benefits/Benefits";
import Header from "./Header/Header";
import classes from "./index.module.scss";
import Products from "./Products/Products";

const index = () => {
  return (
    <main className={classes.root}>
      <Header />
      <Products />
      <Benefits />
    </main>
  );
};

export default index;
