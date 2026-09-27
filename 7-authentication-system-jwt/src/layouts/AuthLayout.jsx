import { Navigate, Outlet } from "react-router-dom";

// AUTHENTICATED LAYOUT (Side Navbar, Dashboard)
export default function AuthLayout({ isAuthenticated }) {
  // If not authenticated, redirect to login page instantly
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return (
    <div className="dashboard-layout flex">
      <nav className="max-w-3xs bg-slate-500">Side Navbar</nav>
      <main className="grow min-h-screen bg-slate-100">
        <Outlet />
      </main>
    </div>
  );
}
