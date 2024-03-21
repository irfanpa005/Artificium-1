import React from "react";

function SendIcon({ color }) {
  return (
    <div>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="12" fill="#1A1D21" />
        <path
          d="M21.7308 26.2692L31.2337 16.7664M17.4866 19.9981L29.1349 16.1153C30.8344 15.5488 32.4512 17.1656 31.8847 18.8651L28.0019 30.5134C27.3895 32.3507 24.8613 32.5304 23.9952 30.7981L22.0548 26.9174C21.8445 26.4967 21.5033 26.1555 21.0826 25.9452L17.2019 24.0048C15.4696 23.1387 15.6493 20.6105 17.4866 19.9981Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default SendIcon;
