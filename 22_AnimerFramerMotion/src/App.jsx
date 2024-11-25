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

  return (
    <div className="container my-4 vstack gap-2">
      <motion.div className="vstack gap-2" animate={open ? "visible" : "hidden"} variants={wrappervariants}>
        <MotionBox variants={boxVariants} transition={{ type: "inertia", velocity: 150 }}>
          1
        </MotionBox>
      </motion.div>
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

export default App;
