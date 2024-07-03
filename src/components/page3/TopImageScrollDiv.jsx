import React, { useEffect, useState } from "react";
import ImageDiv from "./ImageDiv";
import VideoDiv from "./VideoDiv";
import { motion, useScroll } from "framer-motion";

const TopImageScrollDiv = () => {
  const [direction, setDirection] = useState(1);
  const { scrollY } = useScroll();

  const handleImageScrolling = () => {
    let current = scrollY.get() - scrollY.getPrevious();
    if (current > 0) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
  };

  useEffect(() => {
    scrollY.on("change", handleImageScrolling);
  }, [scrollY])

  return (
    <motion.div
      initial={{
        transform: `translateX(-30vh)`,
      }}
      animate={{
        transform: direction > 0 ? `translateX(0vh)` : `translateX(-30vh)`
      }}
      transition={{
        duration: 3,
        ease: "linear"
      }}
      className="w-full h-[45vh] relative flex justify-evenly gap-10 whitespace-nowrap"
    >
      <ImageDiv url="https://dennissnellenberg.com/assets/img/home-item-1.jpg" />
      <VideoDiv url="https://dennissnellenberg.com/assets/img/home-item-2.mp4" />
      <ImageDiv url="https://dennissnellenberg.com/assets/img/home-item-3.jpg" />
      <VideoDiv url="https://dennissnellenberg.com/assets/img/home-item-4.mp4" />
    </motion.div>
  );
};

export default TopImageScrollDiv;
