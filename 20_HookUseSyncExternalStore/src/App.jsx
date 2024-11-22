import { useOnline } from "./hooks/useOnline";
import { Counter } from "./components/Counter";

export default function ChatIndicatore() {
  const isOnline = useOnline;
  return (
    <>
      <h1>{isOnline ? "En ligne" : "Hors ligne"}</h1>
      <Counter />
      <Counter />
    </>
  );
}
