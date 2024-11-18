import { useState } from "react";

function App() {
  const [firstname, setFirstname] = useState("John Doe");

  const handleChange = (e) => {
    setFirstname(e.target.value);
  };

  const reset = () => {
    setFirstname("");
  };

  return (
    <form>
      <input type="text" name="firstname" value={firstname} onChange={handleChange} /> {firstname}
      <button onClick={reset} type="button">
        Reset
      </button>
    </form>
  );
}

export default App;
