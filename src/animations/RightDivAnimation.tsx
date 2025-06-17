// RightDivAnimation.tsx

import React from "react";
import { motion } from "framer-motion";

interface RightDivAnimationProps {
  children: React.ReactNode;
}

const RightDivAnimation: React.FC<RightDivAnimationProps> = ({ children }) => {
  // const container = {
  //   initial: { opacity: 0, x: "50vw", y: "0", translateX: "-50%" },
  //   animate: {
  //     opacity: 1,
  //     x: "100vw",
  //     y: "0",
  //     translateX: "-100%",
  //     transition: {
  //       delay: 3,
  //       duration: 1,
  //       type: "spring",
  //     },
  //   },
  // };
  const container = {
    initial: { opacity: 0, x: "0", y: "-10vh", translateX: "-50%" },
    animate: {
      opacity: 1,
      x: "0",
      y: "0",
      translateX: "0%",
      transition: {
        delay: 7,
        duration: 3,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={container}
      className="right-div-animation" // Add a class for static positioning
    >
      {children}
    </motion.div>
  );
};

export default RightDivAnimation;
