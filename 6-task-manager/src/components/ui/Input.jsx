export default function Input({
  id,
  type,
  className,
  placeholder,
  value,
  onChange,
  autoComplete,
}) {
  return (
    <input
      id={id}
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
    />
  );
}
