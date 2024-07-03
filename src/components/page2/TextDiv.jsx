import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import HoverTextDiv from "./HoverTextDiv";

const TextDiv = () => {
  const [imageScroll, setImageScroll] = useState(0);
  const textArray = ["TWICE", "The Damai", "FEBRIC", "Aanstekelijk"];

  const parentRef = useRef(null);
  const hoverRef = useRef(null);

  const mouseEntering = () => {
    hoverRef.current.style.transform = `translate(-50%, -50%) scale(1)`;
  };

  const mouseLeaving = () => {
    hoverRef.current.style.transform = `translate(-50%, -50%) scale(0)`;
  };

  const mouseMoving = (e) => {
    hoverRef.current.style.left =
      e.clientX - parentRef.current.getBoundingClientRect().x + "px";
    hoverRef.current.style.top =
      e.clientY - parentRef.current.getBoundingClientRect().y + "px";
  };

  return (
    <motion.div
      ref={parentRef}
      onMouseEnter={mouseEntering}
      onMouseLeave={mouseLeaving}
      onMouseMove={(e) => mouseMoving(e)}
      className="parent relative"
    >
      <div
        ref={hoverRef}
        className="imagediv w-[28vw] h-[28vw] absolute -translate-x-1/2 -translate-y-1/2 z-10 overflow-hidden"
      >
        <motion.div
          animate={{
            transform: `translateY(-${imageScroll}%)`,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut"
          }}
          className="w-full h-full"
        >
          <img
            className="w-full h-full object-cover"
            src="https://dennissnellenberg.com/media/pages/work/twice/0ab7e43954-1710404752/thumbnail-twice-810x810-crop-q72.jpg"
            alt=""
          />
          <img
            className="w-full h-full object-cover"
            src="https://dennissnellenberg.com/media/pages/work/the-damai/b511d32d21-1710452224/thumbnail-thedamai-v2-810x810-crop-q72.jpg"
            alt=""
          />
          <img
            className="w-full h-full object-cover"
            src="https://dennissnellenberg.com/media/pages/work/fabric/ac07564a5f-1688453092/thumbnail-fabric-darkgray-810x810-crop-q72.jpg"
            alt=""
          />
          <img
            className="w-full h-full object-cover"
            src="https://dennissnellenberg.com/media/pages/work/aanstekelijk/441187fb44-1687423090/thumbnail-aanstekelijk-810x810-crop-q72.jpg"
            alt=""
          />
        </motion.div>
      </div>

      <div className="textdiv w-full h-full">
        {textArray.map((elem, index) => (
          <HoverTextDiv
            key={index}
            h1={elem}
            translate={index * 100}
            setImageScroll={setImageScroll}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default TextDiv;
