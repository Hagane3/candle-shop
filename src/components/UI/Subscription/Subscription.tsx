import React from "react";
import classes from "./Subscription.module.scss";

const Subscription = () => {
  return (
    <div className={classes.root}>
      <form>
        <div className={classes.one_time}>
          <input type="radio" name="sub" id="onetime" defaultChecked />
          <label htmlFor="onetime">One time purchase</label>
        </div>
        <div className={classes.subscription}>
          <div className={classes.subscription_header}>
            <input type="radio" name="sub" id="subscription" />
            <label htmlFor="subscription">
              <span>Sub & Delivery every</span>
              <select>
                <option value="1 week">1 week</option>
                <option value="2 weeks">2 weeks</option>
                <option value="3 weeks">3 weeks</option>
                <option value="4 weeks">4 weeks</option>
              </select>
            </label>
          </div>
          <div className={classes.subscription_description}>
            <p>
              Subscribe now and get the 10% of discount on every recurring
              order. The discount will be applied at checkout.{" "}
              <span>See details</span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Subscription;
