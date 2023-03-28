import React from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.root}>
      <div className={classes.container}>
        <h1>The nature candle</h1>
        <h2>
          All handmade with natural soy wax, Candleaf is a companion for all
          your pleasure moments .
        </h2>
        <Button width={100}>Discovery our colection</Button>
      </div>
    </header>
  );
};

export default Header;
