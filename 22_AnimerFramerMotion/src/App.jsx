import { useToggle } from "./hooks/useToggle.js";
import { Button } from "./components/Button.jsx";
import { motion, stagger } from "framer-motion";
import "./App.css";
import { forwardRef } from "react";

const boxVariants = {
  visible: { x: 0, rotate: 0 },
  hidden: { x: 100, rotate: 45 },
};

const wrappervariants = {
  // visible: { opacity: 1, transition: { when: "beforeChildren" } },
  // hidden: { opacity: 0, transition: { when: "afterChildren", staggerChildren: 0.2 } },
};

function App() {
  const [open, toggle] = useToggle(true);
  const items = open ? [1, 2, 3, 4, 5] : [3, 2, 5, 1, 4];

  return (
    <div className="container my-4 vstack gap-2">
      <motion.div className="hstack gap-2" animate={open ? "visible" : "hidden"} variants={wrappervariants}>
        {items.map((item) => (
          <MotionBox layout key={item}>
            {item}
          </MotionBox>
        ))}
      </motion.div>
      {open ? <Page1 /> : <Page2 />}
      <div>
        <Button onClick={toggle}>Afficher / Masquer</Button>
      </div>
    </div>
  );
}

const Box = forwardRef(({ children }, ref) => {
  return (
    <div className="box" ref={ref}>
      {children}
    </div>
  );
});

const MotionBox = motion(Box);

function Page1() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptate ipsam ratione temporibus facilis
        doloribus, sit illo, eum, mollitia deserunt quo incidunt facere! Quas inventore animi maiores exercitationem a
        rerum!
      </p>
      <motion.img layoutId="image" src="https://picsum.photos/id/237/200/300" width={200} height={300} alt="" />
      <p>Lorem ipsum dolor sit.</p>
    </div>
  );
}

function Page2() {
  return (
    <div>
      <motion.img layoutId="image" src="https://picsum.photos/id/238/300/200" width={300} height={200} alt="" />
      <p>Lorem ipsum dolor sit.</p>
    </div>
  );
}

export default App;
