import React from "react";
import Testimonial from "./Testimonial";
import Testimonials from "../_data/testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => {
  return (
    <div>
      <h2>
        <FontAwesomeIcon icon="comments" /> Testimonials
      </h2>
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
