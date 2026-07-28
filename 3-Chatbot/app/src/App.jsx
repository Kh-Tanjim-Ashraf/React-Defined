import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import ChatInput from "./components/chatInput";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Chat Input */}
      <ChatInput />

      {/* Chat Messages: User & Bot */}
    </>
  );
}

export default App;
