import React from "react";
import { BsPerson } from "react-icons/bs";
import "./PersonLogo.css";

function PersonLogo() {
  return (
    <div className="PersonLogo">
      <svg
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Icon Back">
          <rect
            id="Rectangle"
            opacity="0.1"
            width="45"
            height="45"
            rx="15"
            fill="#F9A84D"
          />
          <g id="Vector">
            <path
              id="Path"
              d="M20.6359 22.182L27 28.5462L25.182 30.3641L17 22.182L25.182 14L27 15.818L20.6359 22.182Z"
              fill="#DA6317"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default PersonLogo;
