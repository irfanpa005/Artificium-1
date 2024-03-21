import React from "react";

function Triangle({ color }) {
  return (
    <div>
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.90682 15.5H12.0925C14.3743 15.5 15.8208 13.0536 14.7212 11.0543L9.75211 2.01959C8.99225 0.638035 7.00709 0.638033 6.24724 2.01958L1.27817 11.0543C0.178528 13.0536 1.62501 15.5 3.90682 15.5Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
}

export default Triangle;
