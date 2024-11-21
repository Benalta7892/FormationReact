import { forwardRef, useId } from "react";

/**
 * @param {string} placeholder
 * @param {string} value
 * @param {string} label
 * @param {(s: string) => void} onChange
 */
export const Input = forwardRef(({ placeholder, value, onChange, label }, ref) => {
  console.log(ref);

  const id = useId();
  return (
    <div>
      <label className="form-label" htlmfor={id}>
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        className="form-control"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
});

Input.displayName = "Input";
