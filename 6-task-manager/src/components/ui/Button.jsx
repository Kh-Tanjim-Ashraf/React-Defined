export default function Button({
  type,
  onClick,
  className,
  ariaLabel,
  children,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
