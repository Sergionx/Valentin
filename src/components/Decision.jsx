import { useRef, useState } from "react";
import CoolButton from "./buttons/CoolButton";
import NoButtton from "./buttons/NoButtton";
import JSConfetti from "js-confetti";
import AppearingText from "./AppearingText";
import GIFCute from "../../public/cute.gif";

// TODO - Mostrar un mensaje de te amo en la pantalla
export default function Decision() {
  const [appearText, setAppearText] = useState(false);
  const audio = useRef(new Audio("/Ferris_Wheel.mp3"));

  function onAccept() {
    setAppearText(true);
    const jsConfetti = new JSConfetti();

    jsConfetti.addConfetti({
      emojis: ["❤️", "💕", "💖", "💞", "💘", "💝"],
    });

    audio.current.volume = 0.5;
    audio.current.pause();
    audio.current.currentTime = 0;
    audio.current.play();
  }

  return (
    <>
      <section className="flex justify-evenly">
        <CoolButton text="Acepto" onClick={onAccept}></CoolButton>

        <NoButtton />
      </section>
      <AppearingText appear={appearText}>
        <main className="flex flex-col justify-center items-center h-full">
          <h2 className="text-5xl text-[#dc6666]">
            Sabia que dirias que si.{" "}
            <span className="font-bold text-[#d14b4b]">Te amo Pichi</span>
          </h2>

          <img
            src={GIFCute}
            alt="TE AMO AMOR"
            className="w-96 mt-16 "
          />
        </main>
      </AppearingText>
    </>
  );
}
