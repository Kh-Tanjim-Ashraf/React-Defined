import { Routes, Route, Navigate } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { getTokens } from "./utils/auth.utils";
import { useState } from "react";

export default function App() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const tokens = getTokens();

  return (
    <Routes>
      {/* UNPROTECTED/GUEST ROUTES GROUP */}
      <Route element={<GuestLayout />}>
        <Route
          path="/login"
          element={
            <Login
              error={error}
              setError={setError}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route path="/register" element={<Register />} />
      </Route>
      {/* PROTECTED/DASHBOARD ROUTES GROUP */}
      <Route element={<AuthLayout />}>
        <Route
          path="/dashboard"
          element={
            <Dashboard
              error={error}
              setError={setError}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
      </Route>
      {/* FALLBACK REDIRECT */}
      {/* If route doesn't exist, redirect based on auth status */}
      <Route
        path="*"
        element={<Navigate to={tokens ? "/dashboard" : "/login"} replace />}
      />
    </Routes>
  );
}
