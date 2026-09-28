import { clearLogin } from "../utils/auth.utils";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearLogin();
    navigate("/login", { replace: true });
  };

  return (
    <>
      <h1 className="text-4xl text-sky-800 underline underline-offset-12">
        Dashboard
      </h1>
      <button
        className="w-auto bg-sky-800 mt-6 ml-2 p-2 rounded-lg text-white cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );
}
