import React, { useEffect, useState } from "react";
import ImageDiv from "./ImageDiv";
import VideoDiv from "./VideoDiv";
import { motion, useScroll } from "framer-motion";

const BottomImageScrollDiv = () => {
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
        transform: `translateX(0vh)`,
      }}
      animate={{
        transform: direction > 0 ? `translateX(-30vh)` : `translateX(0vh)`
      }}
      transition={{
        duration: 5,
        ease: "linear"
      }}
    className="w-full h-[45vh] relative flex justify-evenly gap-10 whitespace-nowrap">
      <VideoDiv url="https://dennissnellenberg.com/assets/img/home-item-5.mp4" />
      <ImageDiv url="https://dennissnellenberg.com/assets/img/home-item-6.jpg" />
      <VideoDiv url="https://dennissnellenberg.com/assets/img/home-item-7.mp4" />
      <ImageDiv url="https://dennissnellenberg.com/assets/img/home-item-8.jpg" />
    </motion.div>
  );
};

export default BottomImageScrollDiv;
