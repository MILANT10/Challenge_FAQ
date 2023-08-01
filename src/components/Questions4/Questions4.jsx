import React from "react";
import arrowDownSvg from "../../images/icon-arrow-down.svg";

export function Questions4({ activePanel }) {
  return (
    <div>
      <div
        className={`text-sm flex justify-between items-center lg:text-base ${
          activePanel ? "text-veryDark font-bold" : "text-darkGrayishBlue"
        }`}>
        Can I cancel my subscription?{" "}
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
