import CoolButton from "./buttons/CoolButton";
import NoButtton from "./buttons/NoButtton";
import JSConfetti from "js-confetti";

export default function Decision() {

  function onAccept(){
    const jsConfetti = new JSConfetti();

  jsConfetti.addConfetti({
    emojis: ["❤️", "💕", "💖", "💞", "💘", "💝"],
  });
  }

  return (
    <section className="flex justify-evenly">
      <CoolButton text="Acepto" onClick={onAccept}></CoolButton>

      <NoButtton />
    </section>
  );
}
