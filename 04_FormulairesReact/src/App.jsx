import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const [checked, setChecked] = useState(true);
  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <form>
      <input type="text" name="firstname" value={value} onChange={handleChange} />
      <textarea value={value} onChange={handleChange} />
      <input type="checkbox" checked={checked} onChange={toggleChecked} />
      <button disabled={!checked} type="text">
        Envoyer
      </button>
    </form>
  );
}

export default App;
