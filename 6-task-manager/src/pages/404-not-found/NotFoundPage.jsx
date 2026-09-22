import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="flex-1 flex flex-col min-h-0 justify-center gap-10">
      <p className="self-center">Page not found</p>
      <p className="self-center">
        Go back to{" "}
        <Link
          to="/tasks"
          className="font-bold underline underline-offset-8 hover:text-slate-600"
        >
          Task List
        </Link>
      </p>
    </main>
  );
}
