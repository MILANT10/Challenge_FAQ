import React, { useState } from "react";
import "../../index.css";
import { Questions1 } from "../Questions1/Questions1";

export function Accordion() {
  const [activePanel, setActivePanel] = useState(null);

  const handlePanelClick = (panelIndex) => {
    setActivePanel(panelIndex === activePanel ? null : panelIndex);
  };

  return (
    <>
      <div
        className={`w-full border-b-2 border-darkGrayish pb-4 ${
          activePanel === 1
        }`}>
        <div className="cursor-pointer" onClick={() => handlePanelClick(1)}>
          <Questions1 activePanel={activePanel === 1} />
        </div>
        {activePanel === 1 && <div className="p-4">Content of Panel 1</div>}
      </div>
      <div
        className={`border border-gray-300 rounded-md ${
          activePanel === 2 ? "bg-gray-100" : ""
        }`}>
        <div className="p-4 cursor-pointer" onClick={() => handlePanelClick(2)}>
          Panel 2
        </div>
        {activePanel === 2 && <div className="p-4">Content of Panel 2</div>}
      </div>
    </>
  );
}
