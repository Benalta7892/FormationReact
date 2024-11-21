import { useState } from "react";
import { Input } from "./components/forms/Input.jsx";
// import { waitSync } from "./utils/waitSync.js";

function App() {
  console.log("App", "render");

  return (
    <div className="container my-2 vstack gap-2">
      <Demo />
      <Info />
    </div>
  );
}

function Demo() {
  const [name, setName] = useState("");

  return (
    <div>
      <Input label="Prénom" onChange={setName} value={name} />
      <div>{name.toUpperCase()}</div>
    </div>
  );
}

function Info() {
  // waitSync(500);

  return (
    <div className="alert alert-info">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam velit? Officiis accusamus perferendis
      eveniet porro nihil aperiam dolorum dicta ipsa suscipit, ut recusandae? Labore veritatis provident sapiente
      officia nulla!
    </div>
  );
}

export default App;
