import { useParams } from "react-router-dom";

export function Single() {
  const { id } = useParams();
  // throw new Error("Une erreur est survenue!!!!");

  return (
    <div>
      <h1>Article {id}</h1>
    </div>
  );
}
