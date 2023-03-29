import React from "react";
import classes from "./TestimonialItem.module.scss";
import star from "../../../assets/icon/star.svg";

type Props = {
  user: {
    id: number;
    name: string;
    text: string;
    rate: number;
    avatar: string;
  };
};

const TestimonialItem = ({ user }: Props) => {
  return (
    <div className={classes.root}>
      <img src={user.avatar} alt="user photo" />
      <div className={classes.stars}>
        {[...Array(user.rate)].map((e, i) => (
          <img src={star} alt="star icon" key={i} />
        ))}
      </div>
      <blockquote>&quot;{user.text}&quot;</blockquote>
      <figcaption>{user.name}</figcaption>
    </div>
  );
};

export default TestimonialItem;
