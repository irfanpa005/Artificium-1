import React from "react";

function ArtificiumLogo({color}) {
  return (
    <div>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.8518 5.08959L16.3171 14.023C16.886 15.161 16.0587 16.5 14.7867 16.5H11.8518M11.8518 5.08959L10.5304 2.44613C9.89985 1.18462 8.10015 1.18462 7.46958 2.44613L1.68285 14.023C1.11401 15.161 1.94129 16.5 3.21326 16.5H6.14824M11.8518 5.08959L9 7.9422M6.14824 16.5H11.8518M6.14824 16.5L3.29648 13.6474M11.8518 16.5L6.14824 10.7948M9 7.9422L16.272 15.2163M9 7.9422L6.14824 10.7948M1.72801 15.2163L3.29648 13.6474M3.29648 13.6474L6.14824 10.7948"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default ArtificiumLogo;
