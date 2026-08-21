export default function Button({ type, className, onClick, buttonName }) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {buttonName}
    </button>
  );
}
