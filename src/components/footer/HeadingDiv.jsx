import React from "react";

const HeadingDiv = () => {
  return (
    <div className="text-white text-[6vw] leading-none flex items-center justify-between px-[16%] py-[5%]">
      <div className="">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://dennissnellenberg.com/assets/img/DSC07033.jpg"
              alt=""
            />
          </div>
          <h1>Let's work</h1>
        </div>
        <h1>together</h1>
      </div>
      <i className="ri-arrow-left-down-line text-3xl"></i>
    </div>
  );
};

export default HeadingDiv;
