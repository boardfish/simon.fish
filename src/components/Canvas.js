import React from "react";
import { Illustration } from "react-zdog";
import { TAU } from "zdog";

export default props => {
  return (
    <Illustration
      zoom={18}
      rotate={{ x: TAU / 6, y: 0, z: (-9 * TAU) / 16 }}
      style={{ height: props.height, paddingBottom: "1em" }}
      {...props}
    >
      {props.children}
    </Illustration>
  );
};
