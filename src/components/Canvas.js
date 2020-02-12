import React, { useState } from "react";
import { Illustration } from "react-zdog";
import { TAU } from "zdog";
import buildPixelArt from "./Pixels";

const boxCoords = [
  { y: -2, x: -1 },
  { y: -2, x: 3 },
  { y: -1, x: -2 },
  { y: -1, x: -1 },
  { y: -1, x: 0 },
  { y: -1, x: 2 },
  { y: 0, x: -3 },
  { y: 0, x: -2 },
  { y: 0, x: -1 },
  { y: 0, x: 0 },
  { y: 0, x: 1 },
  { y: 1, x: -2 },
  { y: 1, x: -1 },
  { y: 1, x: 0 },
  { y: 1, x: 2 },
  { y: 2, x: -1 },
  { y: 2, x: 3 }
];
export default props => {
  const [coords] = useState({
    x: -0.33 * TAU,
    y: -0.5 * TAU,
    z: -0.9 * TAU
  });
  return (
    <Illustration
      zoom={props.zoom || 18}
      rotate={coords}
      style={{ height: props.height || "9em" }}
      dragRotate={true}
      {...props}
    >
      {buildPixelArt(boxCoords)}
    </Illustration>
  );
};

// x: TAU / 3
// y: 0
