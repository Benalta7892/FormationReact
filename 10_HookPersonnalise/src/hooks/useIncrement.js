import { useState } from "react";

export function useIncrement(initialValue = 0) {
  const [state, setState] = useState(initialValue);
  return [state, () => setState((v) => v + 1), () => setState((v) => v - 1)];
}
