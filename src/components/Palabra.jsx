import React from "react";
import { motion } from "framer-motion";

const propuestaVariants = {
  hidden: {
    pathLength: 0,
    fill: "rgba(0, 0 ,0, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgb(205, 60, 60)",
  },
};

export default function Palabra({ viewBox, width, path }) {
  return (
    <motion.svg
      viewBox={viewBox}
      width={width}
      height="100pt"
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-1 stroke-[#561b1b] h-64"
    >
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        variants={propuestaVariants}

        transition={{
          default: { duration: 4, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0.2, 1, 1] },
        }}
        d={path}
      />
    </motion.svg>
  );
}
