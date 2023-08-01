import "../../index.css";
import womanOnlineMobileImg from "../../images/illustration-woman-online-mobile.svg";
import bgPatternMobile from "../../images/bg-pattern-mobile.svg";
import womanOnlineMobileDesk from "../../images/illustration-woman-online-desktop.svg";

export function SvgCompo() {
  if (window.innerWidth >= 1024) {
    return (
      <>
        <img
          className="lg:relative lg:w-2/4 lg:right-20"
          src={womanOnlineMobileDesk}
          alt="A hotline woman on a pc tchating"
        />
      </>
    );
  }

  return (
    <>
      <img
        className="relative bottom-28 w-3/4 p-0 m-0 lg:bottom-0 lg:w-2/4 lg:right-28"
        src={womanOnlineMobileImg}
        alt="A hotline woman on a pc tchating"
      />

      <img
        className="relative bottom-48 w-3/4 p-0 m-0 lg:bottom-0 lg:w-2/4"
        src={bgPatternMobile}
        alt="shadow of the hotline women"
      />
    </>
  );
}
