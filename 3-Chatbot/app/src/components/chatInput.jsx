import Button from "./button";
import { v4 as uuidv4 } from "uuid";

export default function ChatInput({ chats, setChats }) {
  const handleSendMessage = () => {
    console.log("Send Message!");
    console.log(chats);
    setChats([
      ...chats,
      {
        message: "test",
        sender: "user",
        id: uuidv4(),
      },
    ]);
  };

  return (
    <>
      <div>
        <input type="text" placeholder="Send a message to chatbot" />
        <Button name="Send" />
        <Button name="Send Message" handleSendMessage={handleSendMessage} />
      </div>
    </>
  );
}
