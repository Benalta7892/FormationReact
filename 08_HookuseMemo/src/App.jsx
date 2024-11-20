import { useState } from "react";
import { Input } from "./components/forms/Input.jsx";

function App() {
  const [firstname, setFirstname] = useState("John");
  const [password, setPassword] = useState("MotDePasse");
  const security = passwordSecurity(password);

  return (
    <div className="container my-3 vstack gap-2">
      <Input label="Nom d'utilisateur" value={firstname} onChange={setFirstname} />
      <div>
        <Input label="Password" value={password} onChange={setPassword} />
        Sécurité : {security}
      </div>
    </div>
  );
}

function passwordSecurity(password) {
  if (password.length < 4) {
    return "Faible";
  }
  if (password.length < 6) {
    return "Moyen";
  }
  return "Fort";
}

export default App;
