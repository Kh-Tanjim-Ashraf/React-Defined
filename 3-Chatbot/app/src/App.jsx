import { useState } from "react";
import "./App.css";
import ChatInput from "./components/chatInput";
import ChatMessage from "./components/chatMessage";
import { v4 as uuidv4 } from "uuid";

function App() {
  // Lifting the state up, so that it can be shared among multiple components
  const [chats, setChats] = useState([
    {
      message: "Hello chatbot",
      sender: "user",
      id: uuidv4(),
    },
    {
      message: "Hello how can I help you?",
      sender: "bot",
      id: uuidv4(),
    },
    {
      message: "Can you get me today's date?",
      sender: "user",
      id: uuidv4(),
    },
    {
      message: "Today is September 27",
      sender: "bot",
      id: uuidv4(),
    },
  ]);

  return (
    <>
      {/* Chat Input */}
      <ChatInput chats={chats} setChats={setChats} />

      {/* Chat Messages: User & Bot */}
      {chats.map((chat) => (
        <ChatMessage
          key={chat.id}
          message={chat.message}
          sender={chat.sender}
        />
      ))}
    </>
  );
}

export default App;
