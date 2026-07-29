export default function Button({ name, handleSendMessage }) {
  return <button onClick={handleSendMessage}>{name}</button>;
}
