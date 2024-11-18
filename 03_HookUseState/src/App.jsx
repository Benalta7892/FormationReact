import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  return (
    <>
      <p>Compteur : {count}</p>
      <button onClick={increment}>Incrémenter</button>
    </>
  );
}

export default App;
