import "../../index.css";
import { Accordion } from "../Accordion/Accordion";

export function SecondBox() {
  return (
    <>
      <div className="w-11/12 relative bottom-48 flex flex-col items-center p-2 lg:right-[650px] lg:w-full lg:p-0 lg:flex-col">
        <h1 className="text-veryDark text-3xl font-bold mb-5">FAQ</h1>
        <Accordion />
      </div>
    </>
  );
}
