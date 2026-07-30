import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import UserDetail from "./pages/userDetail";

function App() {
  const name = "Kh Tanjim Ashraf";
  const age = 33;

  return (
    <>
      <UserDetail name={name} age={age} />
    </>
  );
}

export default App;
