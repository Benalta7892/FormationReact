import { useState } from "react";
import { useIncrement } from "./hooks/useIncrement.js";
import { useDocumentTitle } from "./hooks/useDocumentTitle.js";
import { Input } from "./components/forms/Input.jsx";

function App() {
  const { count, increment, decrement } = useIncrement({
    base: 0,
    max: 10,
    min: 0,
  });

  const [name, setName] = useState("");

  useDocumentTitle(name ? "Editer " + name : null);

  return (
    <div>
      <Input value={name} onChange={setName} label="Nom" />
      Compteur {count}
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement}>Décrémenter</button>
    </div>
  );
}

export default App;
