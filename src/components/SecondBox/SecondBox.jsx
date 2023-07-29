import "../../index.css";
import { Accordion } from "../Accordion/Accordion";
import { Questions1 } from "../Questions1/Questions1";

export function SecondBox() {
  return (
    <>
      <div className="w-11/12 relative bottom-48 flex flex-col items-center p-2">
        <h1 className="text-veryDark text-3xl font-bold mb-5">FAQ</h1>
        <Accordion />
      </div>
    </>
  );
}
