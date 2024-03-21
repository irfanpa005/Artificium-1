import React from "react";

function AttachIcon({ color }) {
  return (
    <div>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.2216 26.7279L24.7017 21.2478C25.3851 20.5644 26.4931 20.5644 27.1765 21.2478V21.2478C27.86 21.9313 27.86 23.0393 27.1765 23.7227L21.6965 29.2028C20.3296 30.5696 18.1135 30.5696 16.7467 29.2028V29.2028V29.2028C15.3799 27.836 15.3799 25.6199 16.7467 24.253L23.2874 17.7123C25.3377 15.6621 28.6618 15.6621 30.7121 17.7123V17.7123C32.7623 19.7626 32.7623 23.0867 30.7121 25.1369L24.1713 31.6777"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default AttachIcon;
