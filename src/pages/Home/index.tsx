import React from "react";
import Benefits from "./Benefits/Benefits";
import Header from "./Header/Header";
import classes from "./index.module.scss";
import Products from "./Products/Products";
import Testimonials from "./Testimonials/Testimonials";

const index = () => {
  return (
    <main className={classes.root}>
      <Header />
      <Products />
      <Benefits />
      <Testimonials />
    </main>
  );
};

export default index;
