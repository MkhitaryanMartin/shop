import React from "react";
import "./style.css"

function TrophyIcon() {
  return (
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill="none"
      viewBox="0 0 64 64"
      className="background trophy"
    >
      <path
        stroke="#78350F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.988 10.666h28.18S43.822 46.02 32.079 46.02c-5.736 0-9.23-8.436-11.304-17.067-2.172-9.036-2.786-18.286-2.786-18.286z"
      ></path>
      <path
        stroke="#78350F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M46.169 10.666S48.625 8.046 50.666 8c4-.09 4.74 2.666 4.74 2.666.782 1.626 1.408 5.852-2.35 9.753-3.757 3.9-7.963 7.314-9.675 8.533M17.988 10.667S15.428 8.017 13.332 8c-4-.031-4.74 2.667-4.74 2.667-.782 1.625-1.408 5.851 2.35 9.752 3.757 3.901 8.12 7.315 9.83 8.534M22.684 53.333c0-4.876 9.394-7.314 9.394-7.314s9.393 2.438 9.393 7.314H22.684z"
      ></path>
    </svg>
  );
}

export default TrophyIcon;
