import { motion, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";

const HeroText = () => {
  const { scrollY } = useScroll();
  const [direction, setDirection] = useState(1);

  const handleScrolling = () => {
    const current = scrollY.get() - scrollY.getPrevious();

    if (current > 0) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
  };

  useEffect(() => {
    scrollY.on("change", handleScrolling);
  }, [scrollY]);

  return (
    <motion.div
      initial={{
        x: -1850,
      }}
      animate={{
        x: direction > 0 ? -3700 : 0,
      }}
      transition={{
        duration: 10,
        ease: "linear",
      }}
      className="relative flex leading-none mt-10"
    >
      <h1 className="text-[15vw] whitespace-nowrap text-white tracking-tighter">
        -Dennis Snellenberg
      </h1>
      <h1 className="text-[15vw] whitespace-nowrap text-white tracking-tighter">
        -Dennis Snellenberg
      </h1>
      <h1 className="text-[15vw] whitespace-nowrap text-white tracking-tighter">
        -Dennis Snellenberg
      </h1>
      <h1 className="text-[15vw] whitespace-nowrap text-white tracking-tighter">
        -Dennis Snellenberg
      </h1>
      <h1 className="text-[15vw] whitespace-nowrap text-white tracking-tighter">
        -Dennis Snellenberg
      </h1>
    </motion.div>
  );
};

export default HeroText;
