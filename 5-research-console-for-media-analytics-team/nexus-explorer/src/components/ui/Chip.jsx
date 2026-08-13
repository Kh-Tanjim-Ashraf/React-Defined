export default function Chip({ className, children, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
}
