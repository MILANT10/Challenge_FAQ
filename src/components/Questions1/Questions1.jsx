import React from "react";
import arrowDownSvg from "../../images/icon-arrow-down.svg"; // Chemin correct pour le fichier SVG

export function Questions1({ activePanel }) {
  return (
    <div>
      <div
        className={`text-sm flex justify-between items-center ${
          activePanel ? "text-veryDark" : "text-darkGrayish"
        }`}>
        How many team members can I invite ?{" "}
        <img
          className={`inline w-4 pt-1 ${
            activePanel ? "rotate-180" : "rotate-0"
          }`}
          src={arrowDownSvg}
          alt="Arrow Down"
        />{" "}
      </div>
    </div>
  );
}
