import React, { useState } from "react";
import "../../index.css";
import data from "../../Accordion";

export function Accordion() {
  const [activePanel, setActivePanel] = useState(null);

  const handlePanelClick = (panelIndex) => {
    setActivePanel(panelIndex === activePanel ? null : panelIndex);
  };

  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className={`w-full border-b-2 border-darkGrayish pb-4 mb-8 ${
            activePanel === index + 1 ? "open" : ""
          }`}>
          <div
            className="cursor-pointer"
            onClick={() => handlePanelClick(index + 1)}>
            {item.question}
          </div>
          {activePanel === index + 1 && (
            <div className="overflow-hidden transition-max-h max-h-96">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
