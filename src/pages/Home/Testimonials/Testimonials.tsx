import React from "react";
import TestimonialItem from "../TestimonialItem/TestimonialItem";
import classes from "./Testimonials.module.scss";
import { testimonials } from "../../../data/testimonials";

const Testimonials = () => {
  return (
    <section className={classes.root}>
      <h3>Testimonials</h3>
      <h4>Some quotes from our happy customers</h4>
      <div className={classes.slider}>
        <div className={classes.scroll}>
          {testimonials.map((user) => (
            <TestimonialItem user={user} key={user.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
