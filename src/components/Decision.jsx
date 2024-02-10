import { motion } from "framer-motion";
import CoolButton from "./buttons/CoolButton";

export default function Decision() {
  return (
    <section className="flex justify-evenly">
      <CoolButton text="Acepto" >

      </CoolButton>

      <motion.button
        className="border-2 border-[#da479c]
        rounded-full px-8 py-4 font-bold
        text-[#da479c]
        "
      >
        No
      </motion.button>
    </section>
  );
}
