export default function Badge({ onClick, className, children }) {
  return (
    <span onClick={onClick} className={className}>
      {children}
    </span>
  );
}
