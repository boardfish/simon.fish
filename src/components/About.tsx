import React from "react";
import Canvas from "./Canvas";
import Pixels from "./Pixels";

export default () => {

  return (
    <div>
      <p className="text-secondary text-justify">
        I am a final-year student at the University of Sheffield, studying a
        four-year course in Computer Science including a year in industry. My
        main aim is to become a software developer, with the goal of teaching
        and empowering myself and others. I am passionate about tools and
        technologies such as Rails and React, and I like to apply myself to
        personal projects to refine my skills.
      </p>
      <Canvas height="12em" zoom={29} />
    </div>
  );
};
