import React from "react";

const HoverTextDiv = (props) => {
  const mouseEntered = () => {
    props.setImageScroll(props.translate);
  };

  return (
    <div
      onMouseEnter={mouseEntered}
      className="hover:text-zinc-400 relative hover:px-16 transition-all w-full flex items-center justify-between px-20 py-10 border-b border-zinc-400"
    >
      <div
        id="overlay"
        className="h-full w-full z-40 absolute top-0 left-0"
      ></div>
      <h1 className="text-[5vw] font-normal">{props.h1}</h1>
      <h3 className="text-lg tracking-tight leading-sung text-zinc-600">
        Intraction & Development
      </h3>
    </div>
  );
};

export default HoverTextDiv;
