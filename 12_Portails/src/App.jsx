import { createPortal } from "react-dom";

function App() {
  return (
    <div
      style={{
        height: 300,
        overflowY: "scroll",
        background: "#EEE",
        margin: 20,
        position: "relative",
      }}
    >
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis delectus perspiciatis consequuntur dolor
        repellat placeat. Velit, sapiente? Aliquid vel quam quaerat id cumque animi saepe praesentium ratione! Quisquam,
        quo sint?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis delectus perspiciatis consequuntur dolor
        repellat placeat. Velit, sapiente? Aliquid vel quam quaerat id cumque animi saepe praesentium ratione! Quisquam,
        quo sint?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis delectus perspiciatis consequuntur dolor
        repellat placeat. Velit, sapiente? Aliquid vel quam quaerat id cumque animi saepe praesentium ratione! Quisquam,
        quo sint?
      </p>
      <Modal />
    </div>
  );
}

function Modal() {
  return createPortal(
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        padding: 10,
        border: "solid 1px grey",
        background: "#FFF",
      }}
    >
      Je suis une modale
    </div>,
    document.body
  );
}

export default App;
