export default function Button({ type, buttonName, className, onClick }) {
  return (
    <>
      <button type={type} className={className} onClick={onClick}>
        {buttonName}
      </button>
    </>
  );
}
