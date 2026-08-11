export default function Button({ type, className, buttonName }) {
  return (
    <button type={type} className={className}>
      {buttonName}
    </button>
  );
}
