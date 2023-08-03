import React, { useState } from "react";
import "../../index.css";
import { Questions1 } from "../Questions1/Questions1";
import { Reponse1 } from "../Reponse1/Reponse1";
import { Questions2 } from "../Questions2/Questions2";
import { Reponse2 } from "../Reponse2/Reponse2";
import { Questions3 } from "../Questions3/Questions3";
import { Reponse3 } from "../Reponse3/Reponse3";
import { Questions4 } from "../Questions4/Questions4";
import { Reponse4 } from "../Reponse4/Reponse4";
import { Questions5 } from "../Questions5/Questions5";
import { Reponse5 } from "../Reponse5/Reponse5";

export function Accordion() {
  const [activePanel, setActivePanel] = useState(null);

  const handlePanelClick = (panelIndex) => {
    setActivePanel(panelIndex === activePanel ? null : panelIndex);
  };

  return (
    <div className="flex flex-col gap-7 lg:mr-12">
      <div
        className={`w-full border-b-2 border-darkGrayish pb-4 ${
          activePanel === 1
        }`}>
        <div className="cursor-pointer" onClick={() => handlePanelClick(1)}>
          <Questions1 activePanel={activePanel === 1} />
        </div>
        {activePanel === 1 && <Reponse1 />}
      </div>

      <div
        className={`w-full border-b-2 border-darkGrayish pb-4 ${
          activePanel === 2
        }`}>
        <div className="cursor-pointer" onClick={() => handlePanelClick(2)}>
          <Questions2 activePanel={activePanel === 2} />
        </div>
        {activePanel === 2 && <Reponse2 />}
      </div>
      <div
        className={`w-full border-b-2 border-darkGrayish pb-4 ${
          activePanel === 3
        }`}>
        <div className="cursor-pointer" onClick={() => handlePanelClick(3)}>
          <Questions3 activePanel={activePanel === 3} />
        </div>
        {activePanel === 3 && <Reponse3 />}
      </div>
      <div
        className={`w-full border-b-2 border-darkGrayish pb-4 ${
          activePanel === 4
        }`}>
        <div className="cursor-pointer" onClick={() => handlePanelClick(4)}>
          <Questions4 activePanel={activePanel === 4} />
        </div>
        {activePanel === 4 && <Reponse4 />}
      </div>
      <div
        className={`w-full border-b-2 border-darkGrayish pb-4 ${
          activePanel === 5
        }`}>
        <div className="cursor-pointer" onClick={() => handlePanelClick(5)}>
          <Questions5 activePanel={activePanel === 5} />
        </div>
        {activePanel === 5 && <Reponse5 />}
      </div>
    </div>
  );
}
