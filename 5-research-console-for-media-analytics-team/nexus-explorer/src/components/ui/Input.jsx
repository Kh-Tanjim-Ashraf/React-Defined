export default function Input({
  ref,
  type,
  className,
  name,
  value,
  onChange,
  placeholder,
}) {
  return (
    <input
      ref={ref}
      type={type}
      className={className}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
