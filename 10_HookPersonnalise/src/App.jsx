import { useState } from "react";
import { useIncrement } from "./hooks/useIncrement.js";

function App() {
  const [count, increment, decrement] = useIncrement(0);

  return (
    <div>
      Compteur {count}
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement}>Décrémenter</button>
    </div>
  );
}

export default App;
