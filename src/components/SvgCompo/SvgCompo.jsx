import "../../index.css";
import womanOnlineMobileImg from "../../images/illustration-woman-online-mobile.svg";
import womanOnlineDesk from "../../images/illustration-woman-online-desktop.svg";
import bgPatternMobile from "../../images/bg-pattern-mobile.svg";
import bgPatternDesktop from "../../images/bg-pattern-desktop.svg";
import cubeSvg from "../../images/illustration-box-desktop.svg";

export function SvgCompo() {
  if (window.innerWidth >= 1024) {
    return (
      <div className="flex flex-col items-start justify-start h-full overflow-clip">
        <img
          className="lg:relative lg:right-24 lg:top-20 lg:w-full"
          src={womanOnlineDesk}
          alt="A hotline woman on a pc tchating"
        />

        <img
          className="lg:relative lg:bottom-96 right-24"
          src={bgPatternDesktop}
          alt="shadow of the hotline woman"
        />

        <img
          className="lg:absolute lg:top-[450px] left-[180px]"
          src={cubeSvg}
          alt="cube with an @"
        />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center relative bottom-40">
        <img
          className="w-3/4 p-0 m-0 relative top-14"
          src={womanOnlineMobileImg}
          alt="A hotline woman on a pc tchating"
        />

        <img
          className="w-3/4 p-0 m-0 relative bottom-6"
          src={bgPatternMobile}
          alt="shadow of the hotline women"
        />
      </div>
    );
  }
}
