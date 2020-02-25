import React from "react";
import Testimonial from "./Testimonial";
import Testimonials from "../_data/testimonials";

export default () => (
  <div className="d-flex flex-column">
    {Testimonials.map(testimonial => {
      return <Testimonial {...testimonial} />;
    })}
  </div>
);
