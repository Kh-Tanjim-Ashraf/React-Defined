import Button from "./button";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function ChatInput({ chats, setChats }) {
  // Since the textbox initiates with empty value
  const [inputText, setInputText] = useState("");

  // This function gets invoked on-change event of the input-field
  const handleSaveInputText = (event) => {
    // Store textbox value into the React "State"
    setInputText(event.target.value);
  };

  // Didn't define the function inside the `<Button />` component, rather placed it in such a common place where it can use other data/objects without getting them passed as arguments in the function parameter
  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      // Create a new array of chat messages
      setChats([
        ...chats,
        {
          message: inputText.trim(),
          sender: "user",
          id: uuidv4(),
        },
      ]);
    }

    // Reset the state after sending
    setInputText("");
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Send a message to chatbot"
          value={inputText}
          onChange={handleSaveInputText}
          onKeyDown={(event) => event.keyCode === 13 && handleSendMessage()}
        />
        <Button name="Send" handleSendMessage={handleSendMessage} />
      </div>
    </>
  );
}
