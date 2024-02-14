import { motion } from "framer-motion";

export default function AppearingText({ appear, children }) {
  return (
    <div
      className={`z-99 fixed top-0 left-0 w-full h-full 
      transition-all duration-300 
      ${appear ? "bg-black  bg-opacity-60" : "opacity-0 pointer-events-none"}`}
    >
      {children}
    </div>
  );
}
