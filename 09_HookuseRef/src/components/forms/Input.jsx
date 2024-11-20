import { useId } from "react";

/**
 * @param {string} placeholder
 * @param {string} value
 * @param {string} label
 * @param {(s: string) => void} onChange
 */
export function Input({ placeholder, value, onChange, label }) {
  const id = useId();
  return (
    <div className="form-group">
      <label className="form-label" htlmfor={id}>
        {label}
      </label>
      <input
        id={id}
        className="form-control"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
