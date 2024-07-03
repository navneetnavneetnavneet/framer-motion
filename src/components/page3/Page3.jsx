import React from "react";
import TopImageScrollDiv from "./TopImageScrollDiv";
import BottomImageScrollDiv from "./BottomImageScrollDiv";

const Page3 = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden flex flex-col justify-evenly">
      <TopImageScrollDiv />
      <BottomImageScrollDiv />
    </div>
  );
};

export default Page3;
