// LeftDivAnimation.tsx

import React from "react";
import { motion } from "framer-motion";

interface LeftDivAnimationProps {
  children: React.ReactNode;
}
const LeftDivAnimation: React.FC<LeftDivAnimationProps> = ({ children }) => {
  const container = {
    initial: { x: "35vw", y: "5vh", translateX: "-50%" },
    animate: {
      x: "0",
      y: "0",
      translateX: "0%",
      transition: {
        delay: 6,
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
      className="left-div-animation" // Add a class for static positioning
    >
      {children}
    </motion.div>
  );
};

export default LeftDivAnimation;
