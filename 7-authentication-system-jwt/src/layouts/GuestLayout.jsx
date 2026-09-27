import { Navigate, Outlet } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

// UNAUTHENTICATED LAYOUT (Centered box for auth forms)
export default function GuestLayout({ isAuthenticated }) {
  // If authenticated, redirect to dashboard instantly
  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  return (
    <main className="flex justify-center items-center min-w-3xl min-h-screen bg-slate-100">
      <div className="card-div min-w-1/3 bg-white rounded-2xl shadow-xl">
        <Outlet />
      </div>
    </main>
  );
}
