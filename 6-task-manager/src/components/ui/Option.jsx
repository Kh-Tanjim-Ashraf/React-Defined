export default function Option({ value, className, children }) {
  return (
    <option value={value} className={className}>
      {children}
    </option>
  );
}
