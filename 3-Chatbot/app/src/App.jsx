import { useState } from "react";
import "./App.css";
import ChatInput from "./components/chatInput";
import ChatMessage from "./components/chatMessage";

function App() {
  const chats = [
    { message: "Hello chatbot", sender: "user" },
    { message: "Hello how can I help you?", sender: "bot" },
    { message: "Can you get me today's date?", sender: "user" },
    { message: "Today is September 27", sender: "bot" },
  ];

  return (
    <>
      {/* Chat Input */}
      <ChatInput />

      {/* Chat Messages: User & Bot */}
      {chats.map((chat) => (
        <ChatMessage message={chat.message} sender={chat.sender} />
      ))}
    </>
  );
}

export default App;
