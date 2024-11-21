import { useId, useState, useRef, useEffect, useMemo } from "react";
import { Input } from "./components/forms/Input.jsx";

function App() {
  const prefixRef = useRef();
  const [prefix, setPrefix] = useState("");
  prefixRef.current = prefix;

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(prefixRef.current);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Input label="prefix" value={prefix} onChange={setPrefix}></Input>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae laboriosam officia rem eos a? Necessitatibus
      similique culpa tempore inventore voluptatibus, recusandae, provident ea saepe totam magnam blanditiis fugiat
      ipsa!
    </div>
  );
}

export default App;
