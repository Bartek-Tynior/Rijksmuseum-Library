import React from "react";
import AnimatedCursor from "react-animated-cursor";

function AnimeCursor() {
  return (
    <AnimatedCursor
      color="201, 179, 38"
      innerSize={12}
      outerSize={16}
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
  );
}

export default AnimeCursor;
