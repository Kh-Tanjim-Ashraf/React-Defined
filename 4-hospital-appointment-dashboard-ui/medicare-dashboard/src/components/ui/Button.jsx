export default function Button({ type, buttonName, className }) {
  return (
    <>
      <button type={type} className={className}>
        {buttonName}
      </button>
    </>
  );
}
