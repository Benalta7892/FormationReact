import { useToggle } from "../hooks/useToggle";

/**
 * @param {"danger" | "info" | "warning"} type
 */
export function AlertWithContext({ type = "info", children }) {
  const { closeLabel } = useLabels();

  return <Alert {...props} closeLabel={closeLabel} />;

  export function Alert({ type, children, closeLabel }) {
    // ...
  }
}
