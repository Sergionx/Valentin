import { useRef } from "react";
import CoolButton from "./buttons/CoolButton";
import NoButtton from "./buttons/NoButtton";
import JSConfetti from "js-confetti";

// TODO - Mostrar un mensaje de te amo en la pantalla
export default function Decision() {
  const audio = useRef(new Audio('/Ferris_Wheel.mp3'));

  function onAccept() {
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
    <section className="flex justify-evenly">
      <CoolButton text="Acepto" onClick={onAccept}></CoolButton>

      <NoButtton />
    </section>
  );
}
