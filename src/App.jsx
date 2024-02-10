import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Propuesta from "./components/Propuesta";
import JSConfetti from "js-confetti";

// TODO - Reproducir musica
// TODO - Botones para aceptar
// TODO - Corazón pulsante
function App() {
  const jsConfetti = new JSConfetti();

  jsConfetti.addConfetti(
    {
      emojis: ["❤️", "💕", "💖", "💞", "💘", "💝"],
      
    },
  );
  return (
    <>
      <div className="from-white to-[#f69ed1] bg-gradient-radial min-h-screen">
        <Propuesta />
      </div>
    </>
  );
}

export default App;
