import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <h1 className="text-4xl text-sky-800 underline underline-offset-12">
        Login
      </h1>
      <p className="mt-4">
        Don't have account?
        <span>
          <Link
            to="/register"
            className="font-medium text-sky-800 underline underline-offset-4"
          >
            Register
          </Link>
        </span>
      </p>
    </>
  );
}
