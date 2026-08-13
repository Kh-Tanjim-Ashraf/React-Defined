import { Outlet, NavLink } from "react-router-dom";
import styles from "./AppShell.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";

export default function AppShell() {
  return (
    <div className={styles.appShellContainer}>
      <div className={styles.appShellLeftContainer}>
        {/* Sidebar */}
        <Sidebar />
      </div>
      <div className={styles.appShellRightContainer}>
        {/* Topbar */}
        <Topbar />
        {/* Main Grid */}
        <Outlet />
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
