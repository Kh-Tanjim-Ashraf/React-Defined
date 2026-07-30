import UserIcon from "../assets/user.png";
import BotIcon from "../assets/bot.png";

export default function ChatMessage({ message, sender }) {
  return (
    <div className="chat-message">
      {sender === "bot" && (
        <img src={BotIcon} alt={`${sender}-icon`} width={50} />
      )}
      <p>{message}</p>
      {sender === "user" && (
        <img src={UserIcon} alt={`${sender}-icon`} width={50} />
      )}
    </div>
  );
}
