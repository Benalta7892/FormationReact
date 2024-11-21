import { useHashNavigation } from "./hooks/useHashNavigation.js";

function App() {
  const { page } = useHashNavigation();

  return (
    <>
      <p>Page: {page}</p>
      <p>
        <a href="#">Home</a>
        <a href="#post">Article</a>
        <a href="#contact">Contact</a>
      </p>
    </>
  );
}

export default App;
