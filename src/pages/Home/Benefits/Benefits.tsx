import React from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./Benefits.module.scss";

import checkmark from "../../../assets/icon/checkmark.svg";

import candle1 from "../../../assets/img/candles/spiced-mint.png";
import candle2 from "../../../assets/img/candles/juicy-lemon.png";
import leaves from "../../../assets/img/leaves.png";

const Benefits = () => {
  return (
    <section className={classes.root}>
      <h3>Clean and fragrant soy wax</h3>
      <h4>Made for your home and for your wellness</h4>
      <div className={classes.image_container}>
        <img src={candle1} alt="candle" />
        <img src={candle2} alt="candle" />
        <img src={leaves} alt="leaves" />
      </div>
      <div className={classes.benefits}>
        <ul>
          <li>
            <img src={checkmark} alt="checkmark" />{" "}
            <p>
              <strong>Eco-sustainable:</strong> All recyclable materials, 0% CO2
              emissions
            </p>
          </li>
          <li>
            <img src={checkmark} alt="checkmark" />
            <p>
              <strong>Hyphoallergenic:</strong> 100% natural, human friendly
              ingredients{" "}
            </p>
          </li>
          <li>
            <img src={checkmark} alt="checkmark" />
            <p>
              <strong>Handmade:</strong> All candles are craftly made with love.
            </p>
          </li>
          <li>
            <img src={checkmark} alt="checkmark" />
            <p>
              <strong>Long burning:</strong> No more waste. Created for last
              long.
            </p>
          </li>
        </ul>
      </div>
      <Button width={50}>See more</Button>
    </section>
  );
};

export default Benefits;
