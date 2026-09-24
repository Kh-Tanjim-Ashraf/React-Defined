export default function Textarea({
  id,
  type,
  className,
  placeholder,
  value,
  onChange,
  autoComplete,
}) {
  return (
    <textarea
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
