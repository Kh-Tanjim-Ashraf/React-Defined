import { Navigate, Outlet } from "react-router-dom";
import { getTokens } from "../utils/auth.utils";

// AUTHENTICATED LAYOUT (Side Navbar, Dashboard)
export default function AuthLayout() {
  // If tokens unavailable, redirect to login page instantly
  const tokens = getTokens();
  if (!tokens) return <Navigate to="/login" replace />;

  return (
    <div className="dashboard-layout flex">
      <nav className="max-w-3xs bg-slate-500">Side Navbar</nav>
      <main className="grow min-h-screen flex flex-col bg-slate-100">
        <Outlet />
      </main>
    </div>
  );
}
