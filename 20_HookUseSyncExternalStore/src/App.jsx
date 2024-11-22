import { useOnline } from "./hooks/useOnline";

export default function ChatIndicatore() {
  const isOnline = useOnline;
  return <h1>{isOnline ? "En ligne" : "Hors ligne"}</h1>;
}
