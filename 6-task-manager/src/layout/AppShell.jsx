import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function AppShell() {
  return (
    <div className="bg-shadow-grey-50 min-h-screen flex flex-col gap-10">
      {/* Topbar */}
      <Header />
      {/* Main Grid */}
      <Outlet />
      {/* Footer */}
      <Footer />
    </div>
  );
}
