import "../../index.css";
import { Accordion } from "../Accordion/Accordion";

export function SecondBox() {
  return (
    <>
      <div className="w-11/12 relative bottom-48 flex flex-col p-2 lg:w-3/4 lg:mx-5 lg:bottom-0 lg:flex-col">
        <h1 className="text-veryDark text-3xl font-bold mb-5 self-center lg:self-start lg:mb-10">
          FAQ
        </h1>
        <Accordion />
      </div>
    </>
  );
}
