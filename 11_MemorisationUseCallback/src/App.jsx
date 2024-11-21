import { useState } from "react";
import { Input } from "./components/forms/Input.jsx";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="container my-2 vstack gap-2">
      <div>
        <Input label="Prénom" onChange={setName} value={name} />
        <div>{name.toUpperCase()}</div>
      </div>
      <Info />
    </div>
  );
}

function Info() {
  return (
    <div className="alert alert-info">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, veniam velit? Officiis accusamus perferendis
      eveniet porro nihil aperiam dolorum dicta ipsa suscipit, ut recusandae? Labore veritatis provident sapiente
      officia nulla!
    </div>
  );
}

export default App;
