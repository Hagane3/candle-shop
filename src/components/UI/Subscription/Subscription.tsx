import { useState } from "react";
import classes from "./Subscription.module.scss";

type Props = {
  setSubscription: React.Dispatch<React.SetStateAction<string>>;
};

const Subscription = ({ setSubscription }: Props) => {
  const [subscriptionTime, setSubscriptionTime] = useState("1 week");

  const setSubscriptionHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    if (e.target.value === "One time purchase") {
      setSubscription("One time purchase");
    } else if (e.target.value === "Subscription") {
      setSubscription(`Subscription - ${subscriptionTime}`);
    }

    return;
  };

  const setSubscriptionTimeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSubscriptionTime(e.target.value);
  };

  return (
    <div className={classes.root}>
      <form onChange={setSubscriptionHandler}>
        <div className={classes.one_time}>
          <input
            type="radio"
            id="onetime"
            name="subscription"
            value="One time purchase"
            defaultChecked
          />
          <label htmlFor="onetime">One time purchase</label>
        </div>
        <div className={classes.subscription}>
          <div className={classes.subscription_header}>
            <input
              type="radio"
              id="subscription"
              name="subscription"
              value="Subscription"
            />
            <label htmlFor="subscription">
              <span>Sub & Delivery every</span>
              <select
                value={subscriptionTime}
                onChange={setSubscriptionTimeHandler}
              >
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
