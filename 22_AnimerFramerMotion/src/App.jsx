import { useToggle } from "./hooks/useToggle.js";
import { Button } from "./components/Button.jsx";
import { motion } from "framer-motion";
import "./App.css";
import { forwardRef } from "react";

const boxVariants = {
  visible: { x: 0, opacity: 1, rotate: 0 },
  hidden: { x: 100, opacity: 0, rotate: 45 },
};

function App() {
  const [open, toggle] = useToggle(true);

  return (
    <div className="container my-4 vstack gap-2">
      <motion.div className="vstack gap-2" animate={open ? "visible" : "hidden"}>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </motion.div>
      <div>
        <Button onClick={toggle}>Afficher / Masquer</Button>
      </div>
    </div>
  );
}

const Box = forwardRef(({ children }, ref) => {
  return (
    <motion.div variants={boxVariants} className="box" ref={ref}>
      {children}
    </motion.div>
  );
});

const MotionBox = motion(Box);

export default App;
