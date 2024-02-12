import { motion } from "framer-motion";
import { useMotionValue } from "framer-motion";
// TODO - Considerar poner shake when click
export default function NoButtton() {
  const scale = useMotionValue(1);
  const handleClick = () => {
    scale.set(scale.get() - 0.1);
    console.log(scale.get());
  };
  return (
    <motion.button
      className="border-2 border-[#da479c]
    rounded-full px-8 py-4 font-bold
    text-[#da479c]
    "
      style={{ scale }}
    
      transition={{ type: "spring", stiffness: 400 }}
      onClick={handleClick}
    >
      No
    </motion.button>
  );
}
