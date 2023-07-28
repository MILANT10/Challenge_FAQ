import "../../index.css";
import womanOnlineMobileImg from "../../images/illustration-woman-online-mobile.svg";
import bgPatternMobile from "../../images/bg-pattern-mobile.svg";

export function SvgCompo() {
  return (
    <>
      <img
        className="relative bottom-28 w-3/4 p-0 m-0"
        src={womanOnlineMobileImg}
        alt="A hotline woman on a pc tchating"
      />

      <img
        className="relative bottom-48 w-3/4 p-0 m-0"
        src={bgPatternMobile}
        alt="shadow of the hotline women"
      />
    </>
  );
}
