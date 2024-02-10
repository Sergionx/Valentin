import { motion, stagger, useAnimate, useAnimation } from "framer-motion";
import { randomNumberBetween } from "../../utils";

// TODO - QUe saen corazones
// FIXME - Que se muestre por detras
export default function CoolButton({ text }) {
  const [scope, animate] = useAnimate();

  const sparkles = Array.from({ length: 20 });

  const handleClick = async () => {
    const sparklesAnimation = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x: randomNumberBetween(-100, 100),
        y: randomNumberBetween(-100, 100),
        scale: randomNumberBetween(1.5, 2.5),
        opacity: 1,
      },
      {
        duration: 0.4,
        at: "<",
      },
    ]);

    const sparklesFadeOut = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        opacity: 0,
        scale: 0,
      },
      {
        duration: 2,
        at: "<",
      },
    ]);

    const sparklesReset = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x: 0,
        y: 0,
      },
      {
        duration: 0.000001,
      },
    ]);

    animate([
      ...sparklesReset,
      [
        ".letter",
        {
          y: -40,
        },
        {
          duration: 0.2,
          delay: stagger(0.05),
        },
      ],
      ...sparklesAnimation,
      [
        ".letter",
        {
          y: 0,
        },
        {
          duration: 0.0000001,
        },
      ],
      ...sparklesFadeOut,
    ]);
  };

  return (
    <div ref={scope}>
      <motion.button
        onClick={handleClick}
        ref={scope}
        className="bg-gradient-to-r from-[#ef93c9] to-[#da479c]
        shadow text-xl relative 
        rounded-full px-8 pt-4 pb-3 font-bold"
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <Text text={text} />
        <Sparkles sparkles={sparkles} />
      </motion.button>
    </div>
  );
}

function Text({ text }) {
  return (
    <>
      <span className="sr-only"></span>
      <span
        className="block 
        h-10 overflow-hidden"
        aria-hidden
      >
        {text.split("").map((letter, index) => (
          <span
            data-letter={letter}
            className="letter
                inline-block relative h-10
                after:absolute after:left-0 after:top-full
                after:content-[attr(data-letter)]
                after:h-10"
            key={letter + index}
          >
            {letter}
          </span>
        ))}
      </span>
    </>
  );
}

function Sparkles({ sparkles }) {
  return (
    <span aria-hidden className="pointer-events-none absolute inset-0 block ">
      {sparkles.map((_, index) => (
        <svg
          className={`absolute left-1/2 top-1/2  -z-10 opacity-0 sparkle-${index}`}
          key={index}
          viewBox="0 0 122 117"
          width="10"
          height="10"
        >
          <path
            className="fill-blue-600"
            d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
          />
        </svg>
      ))}
    </span>
  );
}
