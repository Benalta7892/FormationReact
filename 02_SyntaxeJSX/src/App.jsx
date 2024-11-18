// import { Fragment } from "react"; // Seulement si on utilise Fragment pour mettre un element parent recommandé par React

const title = "Bonjour les <strong>gens</strong>";
const style = { color: "red", backgroundColor: "blue" };
const showTitle = false;
const todos = ["Présenter react", "Présenter le JSX", "Crèer des composants"];

function App() {
  return (
    <>
      <Title color="blue">Mon composant</Title>
      <input type="text" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dicta est nesciunt facilis hic sunt eligendi
        beatae et quia. Tempora, iusto quos nesciunt dolores recusandae quasi cum dolorem quae eum.
      </p>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

function Title({ color, children, hidden }) {
  if (hidden) {
    return null;
  }
  console.log(hidden);

  return <h1 style={{ color: color }}>{children}</h1>;
}

export default App;
