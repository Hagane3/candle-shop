import React from "react";
import Header from "./Header/Header";
import classes from "./index.module.scss";

const index = () => {
  return (
    <main className={classes.root}>
      <Header />
    </main>
  );
};

export default index;
