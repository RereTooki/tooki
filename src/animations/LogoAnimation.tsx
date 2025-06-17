import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface WithChildren {
  children: ReactNode;
}
const LogoAnimation: React.FC<WithChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 0.2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2.5 }}
      className="flex justify-center items-center"
    >
      {children}
    </motion.div>
  );
};

export default LogoAnimation;
