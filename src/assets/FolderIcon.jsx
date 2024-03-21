import React from "react";

function FolderIcon({color}) {
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
          d="M14.8333 5.25H9.64987C9.25468 5.25 8.89656 5.01727 8.73606 4.65614L8.07407 3.16667M14.8333 5.25V5.25C15.7538 5.25 16.5 5.99619 16.5 6.91667V14.5C16.5 15.6046 15.6046 16.5 14.5 16.5H3.5C2.39543 16.5 1.5 15.6046 1.5 14.5V3.5C1.5 2.39543 2.39543 1.5 3.5 1.5H6.68346C7.07865 1.5 7.43677 1.73273 7.59727 2.09386L8.07407 3.16667M14.8333 5.25V4.16667C14.8333 3.61438 14.3856 3.16667 13.8333 3.16667H8.07407"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default FolderIcon;
