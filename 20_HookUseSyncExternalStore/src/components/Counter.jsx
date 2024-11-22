import { increment } from "../hooks/useCount";
import { $count, useSignalValue } from "../hooks/useCount";

export function Counter() {
  const count = useSignalValue($count);
  return <button onClick={increment}>Increment {count}</button>;
}

window.addEventListener("online", console.log);
