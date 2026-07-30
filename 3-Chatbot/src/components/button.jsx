/* A a */
export default function Button({ name, handleSendMessage, className }) {
  return (
    <button className={className} onClick={handleSendMessage}>
      {name}
    </button>
  );
}
