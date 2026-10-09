import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { login } from "../services/auth.service";
import { saveLogin } from "../utils/auth.utils";
import { useNavigate } from "react-router-dom";
import { ErrorContext } from "../contexts/errorContext";
import { LoadingContext } from "../contexts/loadingContext";
import PeoplepanelBannerLogo from "../assets/peoplepanelBannerLogo.png";
import Badge from "../component/ui/Badge";
import Button from "../component/ui/Button";
import Image from "../component/ui/Image";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { error, setError } = useContext(ErrorContext);
  const { isLoading, setIsLoading } = useContext(LoadingContext);

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

      // Navigate to the default route
      navigate("/", { replace: true });
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleErrorCrossButton = () => {
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Header */}
      <div className="flex flex-col items-center gap-5">
        {/* Brand Logo */}
        <Image
          src={PeoplepanelBannerLogo}
          alt="brand-logo"
          width="150"
          height="150"
          className="text-center"
        />
        {/* Form Title */}
        <h1 className="text-4xl font-semibold text-sky-800">Welcome back</h1>
        {/* Error Message */}
        {error && (
          <p className="inline-flex gap-4 justify-center items-center bg-[#FEE2E2] text-[#991B1B] px-4 py-2 rounded-lg">
            Invalid login credentials
            <Badge
              className="px-2 py-0.5 rounded-lg border-[0.1px] border-[#FCA5A5] text-[#991B1B] hover:bg-[#FCA5A5]/30 hover:text-[#7F1D1D] hover:cursor-pointer transition-colors focus:outline-none"
              onClick={toggleErrorCrossButton}
            >
              X
            </Badge>
          </p>
        )}
        {/* {error && "Error Exists"} */}
      </div>
      {/* Body */}
      <div className="flex flex-col gap-4">
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
        <Button
          type="submit"
          className={`w-full px-3 py-2 rounded-lg ${isFormIncomplete ? buttonNotAllowedClass : buttonAllowedClass}`}
          disabled={isFormIncomplete}
        >
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </div>
      {/* Footer */}
      <div>
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
