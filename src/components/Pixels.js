import React from "react";
import { Box } from "react-zdog";
import { Motion, spring } from "react-motion";

export default props => {
  return props.coords.map(coord => (
    <Motion
      defaultStyle={{ x: 0, y: 0 }}
      style={{
        x: spring(coord.x),
        y: spring(coord.y, { stiffness: 15, damping: 6 })
      }}
    >
      {props => (
        <Box translate={props} color="white" stroke={0} backface="#000" />
      )}
    </Motion>
  ));
};
