import UserIcon from "../assets/user.png";
import BotIcon from "../assets/bot.png";

export default function ChatMessage({ message, sender }) {
  return (
    <div
      className={
        sender === "user"
          ? "chat-message-container-user"
          : "chat-message-container-bot"
      }
    >
      {sender === "bot" && (
        <img
          src={BotIcon}
          alt={`${sender}-icon`}
          className="chat-messge-profile-icon"
        />
      )}
      <p className="chat-message-contents">{message}</p>
      {sender === "user" && (
        <img
          src={UserIcon}
          alt={`${sender}-icon`}
          className="chat-messge-profile-icon"
        />
      )}
    </div>
  );
}
