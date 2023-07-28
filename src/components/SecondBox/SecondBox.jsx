import "../../index.css";
import { Questions1 } from "../Questions1/Questions1";

export function SecondBox() {
  return (
    <>
      <div className="w-3/4 relative bottom-48 flex flex-col items-center">
        <h1 className="text-veryDark text-3xl font-bold mb-5">FAQ</h1>
        <Questions1 />
      </div>
    </>
  );
}
