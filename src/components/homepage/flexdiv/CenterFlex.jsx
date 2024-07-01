import React from "react";

const CenterFlex = () => {
  return (
    <div className="w-11/12 relative z-10 mt-16 flex items-end justify-between text-white">
      <div className="flex items-center gap-5 px-4 py-2 bg-black rounded-e-full pl-10">
        <h2 className="text-xl leading-tight">
          Located <br /> in the <br /> Netherlands
        </h2>
        <div className="w-20 h-20 rounded-full bg-zinc-400 flex items-center justify-center">
          <i className="ri-global-line text-5xl rotate-12 font-thin"></i>
        </div>
      </div>
      <div className="flex flex-col gap-20">
        <i className="ri-arrow-right-down-line text-5xl"></i>
        <h2 className="text-4xl leading-[1.5]">
          Freelance <br /> Designer & Developer
        </h2>
      </div>
    </div>
  );
};

export default CenterFlex;
