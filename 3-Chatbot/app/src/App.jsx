import { useState } from "react";
import "./App.css";
import ChatInput from "./components/chatInput";
import ChatMessage from "./components/chatMessage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Chat Input */}
      <ChatInput />

      {/* Chat Messages: User & Bot */}
      <ChatMessage message="Hello chatbot" sender="user" />
      <ChatMessage message="Hello how can I help you?" sender="bot" />
      <ChatMessage message="Can you get me today's date?" sender="user" />
      <ChatMessage message="Today is September 27" sender="bot" />
    </>
  );
}

export default App;
