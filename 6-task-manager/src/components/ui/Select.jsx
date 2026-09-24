export default function Select({
  id,
  className,
  value,
  onChange,
  autoComplete,
  children,
}) {
  return (
    <select
      id={id}
      className={className}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
    >
      {children}
    </select>
  );
}
