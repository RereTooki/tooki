import React from "react";
import { motion } from "framer-motion";

interface WritingAnimationProps {
  text: string;
}
const var2 = 5;
const WritingAnimation: React.FC<WritingAnimationProps> = ({ text }) => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={container}>
      {text.split("").map((char: string, index: number) => (
        <motion.span key={index} variants={letter} className="instruFont">
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default WritingAnimation;
