import React from "react";
import { Box } from "react-zdog";
import { Motion, spring } from "react-motion";

export default coords => {
  return coords.map(coord => (
    <Motion
      defaultStyle={{ x: 0, y: 0 }}
      style={{
        x: spring(coord.x),
        y: spring(coord.y, { stiffness: 15, damping: 6 })
      }}
    >
      {coords => (
        <Box translate={coords} color="white" stroke={0} backface="#000" />
      )}
    </Motion>
  ));
};
