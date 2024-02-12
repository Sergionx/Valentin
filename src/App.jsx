
import Propuesta from "./components/Propuesta";
import Decision from "./components/Decision";

// TODO - Corazón pulsante
function App() {
  
  return (
    <>
      <div
        className="from-white to-[#f69ed1] bg-gradient-radial min-h-screen
          font-valentine"
      >
        <Propuesta />

        <Decision />
      </div>
    </>
  );
}

export default App;
