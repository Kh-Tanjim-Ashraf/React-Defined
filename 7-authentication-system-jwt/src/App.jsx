import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Homepage />} />
      {/* FALLBACK REDIRECT */}
      {/* If route doesn't exist, redirect based on auth status */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
