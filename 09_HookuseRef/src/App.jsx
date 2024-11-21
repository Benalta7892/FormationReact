import { useId, useState, useRef, useEffect, useMemo } from "react";
import { Input } from "./components/forms/Input.jsx";

function App() {
  const ref = useRef(null);
  console.log("App", ref);

  const [prefix, setPrefix] = useState("");

  return (
    <div>
      <Input ref={ref} label="prefix" value={prefix} onChange={setPrefix} />
      {prefix.length === 0 && <div ref={ref}>Hello</div>}
    </div>
  );
}

export default App;
