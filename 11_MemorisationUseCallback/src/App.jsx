import { useState, memo, useMemo, useCallback } from "react";
import { Input } from "./components/forms/Input.jsx";
// import { waitSync } from "./utils/waitSync.js";

function App() {
  const [name, setName] = useState("");

  const handleClick = useCallback(() => {
    console.log(name.length);
  }, [name.length]);

  return (
    <div className="container my-2 vstack gap-2">
      <div>
        <Input label="Prénom" onChange={setName} value={name} />
        <div>{name.toUpperCase()}</div>
      </div>
      <InfoMemo onClick={handleClick} />
    </div>
  );
}

const InfoMemo = memo(function Info({ onClick }) {
  console.log("Info", "render");
  // waitSync(500);

  return (
    <div className="alert alert-info" onClick={onClick}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam velit? Officiis accusamus perferendis
      eveniet porro nihil aperiam dolorum dicta ipsa suscipit, ut recusandae? Labore veritatis provident sapiente
      officia nulla!
    </div>
  );
});

export default App;
