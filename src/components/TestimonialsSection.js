import React from "react";
import Testimonial from "./Testimonial";

export default () => {
  return (
    <div>
      <h2>Testimonials</h2>
      <div className="card-columns">
        <Testimonial
          author="Andy Sykes"
          authorRole="formerly of Pera Technology"
          icon="file"
          link="docs/PeraTechnologyReference.pdf"
        >
          <p>
            "Simon has an ability to take a <b>complex task</b> (both IT-related
            and non-IT) and not only turn it around extremely quickly, but also
            to apply a level of thought and <b>ingenuity</b> of someone{" "}
            <b>a number of years more experienced.</b> It's this level of{" "}
            <b>output and creativity</b> which made the decision to bring Simon
            back after a few months in his summer holiday extremely easy."
          </p>
        </Testimonial>
        <Testimonial
          author="Pauline Narvas"
          authorRole="Code First Girls course ambassador"
          icon={["fab", "linkedin"]}
          link="https://www.linkedin.com/in/boardfish/"
        >
          <p>
            Simon's <b>enthusiasm </b>towards helping out at the Code First:
            Girls community courses in Sheffield was so admirable. His ability
            to communicate <b>complex technical concepts </b>to{" "}
            <b>complete beginners</b> is an important one to have in our
            increasingly multi-disciplinary world. <br />
            His genuine passion to <b>help the tech community </b>mixed in with
            his <b>impressive technical knowledge and skills </b>has made it a
            pleasure to work with him.
          </p>
        </Testimonial>
      </div>
    </div>
  );
};
