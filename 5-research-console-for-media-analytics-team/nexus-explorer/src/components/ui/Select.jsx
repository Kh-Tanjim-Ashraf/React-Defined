export default function Select({ id, className, children }) {
  return (
    <select id={id} className={className}>
      {children}
    </select>
  );
}
