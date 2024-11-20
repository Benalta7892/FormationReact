/**
 * Checkbox avec un libellé sur la droite
 * @param {boolean} checked - état du checkbox
 * @param {(v: boolean) => void} onChange - fonction appelée lors du changement de valeur
 * @param {string} label - libellé du checkbox
 * @param {string} id - identifiant du checkbox
 * @returns
 */
export function Checkbox({ checked, onChange, label, id }) {
  return (
    <div className="form-check">
      <input
        type="checkbox"
        id={id}
        className="form-check-input"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={id} className="form-check-input">
        {label}
      </label>
    </div>
  );
}
