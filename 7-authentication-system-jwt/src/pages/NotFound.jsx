import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1 className="text-4xl text-sky-800">
        Page not found. Go to{" "}
        <Link to="login" replace className="underline underline-offset-12">
          Login
        </Link>
      </h1>
    </>
  );
}
