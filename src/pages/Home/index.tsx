import React from "react";
import Header from "./Header/Header";
import classes from "./index.module.scss";
import Products from "./Products/Products";

const index = () => {
  return (
    <main className={classes.root}>
      <Header />
      <Products />
    </main>
  );
};

export default index;
