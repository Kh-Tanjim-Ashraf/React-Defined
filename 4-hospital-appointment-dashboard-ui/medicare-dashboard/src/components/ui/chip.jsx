export default function Chip({ children, className, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
}
