import React from "react";
import { motion } from "framer-motion";

interface WritingAnimationDelayProps {
  text: string;
}

const WritingAnimationDelay: React.FC<WritingAnimationDelayProps> = ({
  text,
}) => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.9, // This will delay the animation of children by 5 seconds
        staggerChildren: 0.15,
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
        <motion.span key={index} variants={letter} className="playfairFont">
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default WritingAnimationDelay;
