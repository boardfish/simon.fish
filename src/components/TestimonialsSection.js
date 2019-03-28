import React from "react";
import Testimonial from "./Testimonial";
import Testimonials from "../_data/testimonials";

export default () => {
  return (
    <div>
      <h2>Testimonials</h2>
      <div
        className={Testimonials.length <= 3 ? "card-deck" : "card-columns"}
        style={{ columnCount: Testimonials.length % 2 === 0 ? 2 : 3 }}
      >
        {Testimonials.map(testimonial => {
          return <Testimonial {...testimonial} />;
        })}
      </div>
    </div>
  );
};
