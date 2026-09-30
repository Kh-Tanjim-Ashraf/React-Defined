import { Routes, Route, Navigate } from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { getTokens } from "./utils/auth.utils";
import { useState } from "react";
import { ErrorContext } from "./contexts/errorContext";
import { LoadingContext } from "./contexts/loadingContext";

export default function App() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const tokens = getTokens();

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <Routes>
          {/* UNPROTECTED/GUEST ROUTES GROUP */}
          <Route element={<GuestLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          {/* PROTECTED/DASHBOARD ROUTES GROUP */}
          <Route element={<AuthLayout />}>
            {/* Apply Sonner Toast */}
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          {/* FALLBACK REDIRECT */}
          {/* If route doesn't exist, redirect based on auth status */}
          <Route
            path="*"
            element={<Navigate to={tokens ? "/dashboard" : "/login"} replace />}
          />
        </Routes>
      </LoadingContext.Provider>
    </ErrorContext.Provider>
  );
}
