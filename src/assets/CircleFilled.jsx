import React from "react";

function CircleFilled({color}) {
  return (
    <div>
      <svg
        width="15"
        height="15"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1673_344)">
          <circle cx="17" cy="17" r="15" fill={color} />
        </g>
        <defs>
          <filter
            id="filter0_d_1673_344"
            x="0"
            y="0"
            width="34"
            height="34"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="6" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.290196 0 0 0 0 0.788235 0 0 0 0 0.494118 0 0 0 0.48 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1673_344"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1673_344"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default CircleFilled;
