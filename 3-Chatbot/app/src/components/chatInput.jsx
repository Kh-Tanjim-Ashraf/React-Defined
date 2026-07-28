import Button from "./button";

export default function ChatInput() {
  return (
    <>
      <div>
        <input type="text" placeholder="Send a message to chatbot" />
        <Button name="Send" />
      </div>
    </>
  );
}
