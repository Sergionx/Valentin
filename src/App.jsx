import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Propuesta from "./components/Propuesta";
import JSConfetti from "js-confetti";
import Decision from "./components/Decision";

// TODO - Reproducir musica
// TODO - Corazón pulsante
function App() {
  const jsConfetti = new JSConfetti();

  jsConfetti.addConfetti({
    emojis: ["❤️", "💕", "💖", "💞", "💘", "💝"],
  });
  return (
    <>
      <div
        className="from-white to-[#f69ed1] bg-grdient-radial min-h-screen
          font-valentine"
      >
        <Propuesta />

        <Decision />
      </div>
    </>
  );
}

export default App;
