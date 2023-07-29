import React from "react";
import arrowDownSvg from "../../images/icon-arrow-down.svg";

export function Questions2({ activePanel }) {
  return (
    <div>
      <div
        className={`text-sm flex justify-between items-center ${
          activePanel ? "text-veryDark" : "text-darkGrayishBlue"
        }`}>
        What is the maximum file upload size?{" "}
        <img
          className={`inline w-4 pt-1 ${
            activePanel ? "rotate-180" : "rotate-0"
          }`}
          src={arrowDownSvg}
          alt="Arrow Down"
        />
      </div>
    </div>
  );
}
