import "../../index.css";
import { SvgCompo } from "../SvgCompo/SvgCompo";
import { SecondBox } from "../SecondBox/SecondBox";

export function Box() {
  return (
    <div className="w-[330px] bg-divider flex flex-col items-center rounded-2xl">
      <SvgCompo />
      <SecondBox />
    </div>
  );
}
