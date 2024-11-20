export function Input({ value, onChange, label, id }) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input value={value} className="form-control" onChange={(e) => onChange(e.target.ed)} />
    </div>
  );
}
