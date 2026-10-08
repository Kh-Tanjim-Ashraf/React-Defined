import { Navigate, Outlet } from "react-router-dom";
import { getTokens } from "../../utils/auth.utils";

// UNAUTHENTICATED LAYOUT (Centered box for auth forms)
export default function GuestLayout() {
  // If tokens available, redirect to the default protected route instantly
  const tokens = getTokens();
  if (tokens) return <Navigate to="/" replace />;

  return (
    <main className="flex justify-center items-center min-w-3xl min-h-screen bg-slate-100">
      <div className="card-div min-w-1/3 bg-white rounded-2xl shadow-xl py-8 px-6">
        <Outlet />
      </div>
    </main>
  );
}
