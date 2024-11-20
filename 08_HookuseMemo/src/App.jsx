import { useId, useState, useMemo } from "react";
import { Input } from "./components/forms/Input.jsx";

function App() {
  const [firstname, setFirstname] = useState("John");
  const [password, setPassword] = useState("MotDePasse");
  const security = passwordSecurity(password);
  const random = useMemo(() => Math.random(), []);

  return (
    <div className="container my-3 vstack gap-2">
      {random}
      <Input label="Nom d'utilisateur" value={firstname} onChange={setFirstname} />
      <div>
        <Input label="Password" value={password} onChange={setPassword} />
        Sécurité : {security}
      </div>
    </div>
  );
}

function passwordSecurity(password) {
  // Fausse lenteur
  let startTime = performance.now();
  while (performance.now() - startTime < 200) {
    // Attendre 200ms
  }

  if (password.length < 3) {
    return "Faible";
  }
  if (password.length < 6) {
    return "Moyen";
  }
  return "Fort";
}

export default App;
