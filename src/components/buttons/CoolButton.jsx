import { motion, stagger, useAnimate, useAnimation } from "framer-motion";
import { randomNumberBetween } from "../../utils";

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
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`absolute left-1/2 top-1/2 -z-10 opacity-0 sparkle-${index}`}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z"
            stroke-width="0"
            fill="#e13838"
          />
        </svg>
      ))}
    </span>
  );
}
