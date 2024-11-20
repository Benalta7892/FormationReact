import { useId, useState, useRef, useEffect, useMemo } from "react";
import { Input } from "./components/forms/Input.jsx";

function App() {
  const ref = useRef(null);

  useEffect(() => {
    console.log(ref.current.offsetHeight);
  }, []);

  return (
    <div ref={ref}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae laboriosam officia rem eos a? Necessitatibus
      similique culpa tempore inventore voluptatibus, recusandae, provident ea saepe totam magnam blanditiis fugiat
      ipsa!
    </div>
  );
}

export default App;
