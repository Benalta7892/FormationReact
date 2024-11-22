import { useContext } from "react";
import { useTheme } from "../hooks/useTheme.jsx";

/**
 * @param {"primary" | "secondary" | "danger"} variant
 * @returns {JSX.Element}
 */
export function Button({ variant = "primary", ...props }) {
  const newProps = { ...props, className: `btn btn-${variant}` };

  const { theme } = useTheme();

  return <button>{theme}</button>;

  if (props.href) {
    return <a {...newProps} />;
  }

  return <button {...newProps} />;
}
