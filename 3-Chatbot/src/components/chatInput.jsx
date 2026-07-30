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
    // Store the chat-messages in a new array
    const newChatMessages = [
      ...chats,
      {
        message: inputText.trim(),
        sender: "user",
        id: uuidv4(),
      },
    ];

    if (inputText.trim() !== "") {
      // Create a new array of chat messages; The state doesn't get updated immediately; It will be updated after React has completed executing all of the code of this function `ChatInput`
      setChats(newChatMessages);
    }

    // Send the message to the external chatbot
    const response = Chatbot.getResponse(inputText.trim());
    if (response.trim() !== "") {
      // Create a new array of chat messages
      setChats([
        ...newChatMessages,
        {
          message: response.trim(),
          sender: "bot",
          id: uuidv4(),
        },
      ]);
    }

    // Reset the state after sending
    setInputText("");
  };

  return (
    <div className="chat-input-container">
      <input
        type="text"
        placeholder="Send a message to chatbot"
        value={inputText}
        onChange={handleSaveInputText}
        onKeyDown={(event) => event.keyCode === 13 && handleSendMessage()}
        className="chat-input"
      />
      <Button
        name="Send"
        handleSendMessage={handleSendMessage}
        className="send-button"
      />
    </div>
  );
}
