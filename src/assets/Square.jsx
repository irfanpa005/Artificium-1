import React from "react";

function Square({ color }) {
  return (
    <div>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.5"
          y="1.5"
          width="15"
          height="15"
          rx="3"
          stroke="#B6F09C"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
}

export default Square;
