import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Login from "./pages/login";
import AdminDashboard from "./pages/dashboards/admin";
import StaffDashboard from "./pages/dashboards/staff";
import UserDashboard from "./pages/dashboards/user";

function App() {
  const role = "Admin";
  const isAuthenticated = true;

  return (
    <>
      {/* IIFE - Immediately Invoked Function Expression */}
      {(() => {
        if (isAuthenticated) {
          switch (role) {
            case "Admin":
              return <AdminDashboard />;
              break;
            case "Staff":
              return <StaffDashboard />;
              break;
            case "User":
              return <UserDashboard />;
              break;
            default:
              return <Login />;
              break;
          }
        } else {
          return <Login />;
        }
      })()}
    </>
  );
}

export default App;
