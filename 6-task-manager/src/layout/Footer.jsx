import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-shadow-grey-100 h-14 flex justify-center items-center">
      <p className="text-xs text-shadow-grey-400">
        <Link to="/tasks">Task Management System</Link> • Made by{" "}
        <a
          href="https://www.github.com/Kh-Tanjim-Ashraf"
          target="_blank"
          className="font-medium underline underline-offset-4 hover:text-slate-600"
        >
          Kh Tanjim Ashraf
        </a>
      </p>
    </footer>
  );
}
