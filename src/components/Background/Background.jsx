import "../../index.css";
import { Box } from "../MainBox/MainBox";

export function Background() {
  return (
    <div className="h-screen bg-gradient-to-b from-bgPurple to-bgBlue flex justify-center items-center">
      <Box />
    </div>
  );
}
