import React from 'react'
import { motion } from "framer-motion";

const propuestaVariants = {
  hidden: {
    pathLength: 0,
    fill:"rgba(0, 0 ,0, 0)"
  },
  visible: {
    pathLength: 1,
    fill:"rgb(205, 60, 60)"
  },
};

export default function Palabra({ path }) {
  return (
    <motion.svg
        viewBox="0 0 114 48"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-1 stroke-black  w-full"
      >
         <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          variants={propuestaVariants}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 5, ease: "easeInOut" },
            fill: { duration: 5, ease: [1, 0, 0.8, 1] },
          }} 
          d={path}
          />
    </motion.svg>
  )
}