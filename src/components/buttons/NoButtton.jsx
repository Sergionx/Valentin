import { motion, useAnimate } from "framer-motion";
import { useMotionValue } from "framer-motion";

export default function NoButtton() {
  const [scope, animate] = useAnimate();
  const shakeX = useMotionValue(0);

  const scale = useMotionValue(1);
  const handleClick = () => {
    animate(shakeX, [-20, 20, -20, 20, 0], {
      type: 'spring',
      stiffness: 1000,
      damping: 20,
    });
    scale.set(scale.get() - 0.1);
  };

  return (
    <motion.button
      ref={scope}
      className="border-2 border-[#da479c]
    rounded-full px-8 py-4 font-bold
    text-[#da479c]
    "
    style={{ scale, x: shakeX }}
    transition={{ type: "spring", stiffness: 400 }}
      onClick={handleClick}
    >
      No
    </motion.button>
  );
}
