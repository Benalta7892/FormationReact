// import { Fragment } from "react"; // Seulement si on utilise Fragment pour mettre un element parent recommandé par React

const title = "Bonjour les <strong>gens</strong>";
const style = { color: "red", backgroundColor: "blue" };

function App() {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    alert("J'ai  sur le titre");
  };

  return (
    <>
      <h1 onClick={handleClick} id="title" className="title" style={style}>
        {title}
      </h1>
      <input type="text" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dicta est nesciunt facilis hic sunt eligendi
        beatae et quia. Tempora, iusto quos nesciunt dolores recusandae quasi cum dolorem quae eum.
      </p>
    </>
  );
}

export default App;
