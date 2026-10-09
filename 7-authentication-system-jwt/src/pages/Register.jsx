import { Link } from "react-router-dom";
import Badge from "../component/ui/Badge";

export default function Register() {
  return (
    <>
      <h1 className="text-4xl text-sky-800 underline underline-offset-12">
        Register
      </h1>
      <p className="mt-4">
        Already have an account?{" "}
        <Badge>
          <Link
            to="/login"
            className="font-medium text-sky-800 underline underline-offset-4"
          >
            Sign In
          </Link>
        </Badge>
      </p>
    </>
  );
}
