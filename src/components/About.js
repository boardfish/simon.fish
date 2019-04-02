import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default props => {
  return (
    <div>
      <h2>
        <FontAwesomeIcon icon="user" /> About
      </h2>
      <p>
        I am a third-year student at the University of Sheffield, studying a
        four-year course in Computer Science including a year in industry. My
        main aim is to become a software developer, with the goal of building
        things that others will enjoy or find useful, no matter their level of
        skill. I am passionate about tools and technologies such as Rails and
        React, and I like to apply myself to personal projects to refine my
        skills.
      </p>
    </div>
  );
};
