import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../services/auth.service";
import { saveLogin } from "../utils/auth.utils";
import { useNavigate } from "react-router-dom";

export default function Login({ error, setError, isLoading, setIsLoading }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const inputClass =
    "w-full px-3 py-2 rounded-lg border-[0.5px] border-slate-200 focus:outline-[0.5px] focus:outline-sky-800";

  const buttonAllowedClass =
    "bg-sky-800 text-white hover:bg-sky-700 cursor-pointer";

  const buttonNotAllowedClass = "bg-sky-900 text-slate-400 cursor-not-allowed";

  const isFormIncomplete = !username || !password;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const data = await login(username, password);

      const tokens = {
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      };

      const user = {
        username: data.username,
        email: data.email,
      };

      // Save the login creds to the localStorage
      saveLogin(tokens, user);

      // Navigate to the dashboard
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="form-header">
        <p className="text-sm text-slate-500">Please enter your detail</p>
        <h1 className="text-4xl font-semibold text-sky-800">Welcome back</h1>
      </div>
      <div className="form-body flex flex-col gap-4">
        {/* Input field: Username */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={inputClass}
            // required
          />
        </div>
        {/* Input field: Password */}
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputClass}
            // required
          />
        </div>
        <button
          type="submit"
          className={`w-full px-3 py-2 rounded-lg ${isFormIncomplete ? buttonNotAllowedClass : buttonAllowedClass}`}
          disabled={isFormIncomplete}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </div>
      <div className="form-footer">
        <p className="text-sm text-slate-500">
          Don't have account?{" "}
          <span>
            <Link
              to="/register"
              className="font-medium text-sky-800 underline underline-offset-4"
            >
              Register
            </Link>
          </span>
        </p>
      </div>
    </form>
  );
}
