import { useEffect, useState } from "react";
import classes from "./Subscription.module.scss";

type Props = {
  setSubscription: React.Dispatch<React.SetStateAction<string>>;
};

const Subscription = ({ setSubscription }: Props) => {
  const [isSubscription, setIsSubscription] = useState(false);
  const [subscriptionTime, setSubscriptionTime] = useState("1 week");

  useEffect(() => {
    isSubscription
      ? setSubscription(`Sub & Delivery every ${subscriptionTime}`)
      : setSubscription("One time purchase");
  }, [isSubscription, subscriptionTime]);

  const setIsSubscriptionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "Subscription") {
      setIsSubscription(true);
    } else {
      setIsSubscription(false);
    }
  };

  const setSubscriptionTimeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSubscriptionTime(e.target.value);
  };

  return (
    <div className={classes.root}>
      <form>
        <div className={classes.one_time}>
          <input
            type="radio"
            id="onetime"
            name="subscription"
            value="One time purchase"
            onChange={setIsSubscriptionHandler}
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
              onChange={setIsSubscriptionHandler}
            />
            <label htmlFor="subscription">
              <span>Sub & Delivery every</span>
              <select onChange={setSubscriptionTimeHandler}>
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
