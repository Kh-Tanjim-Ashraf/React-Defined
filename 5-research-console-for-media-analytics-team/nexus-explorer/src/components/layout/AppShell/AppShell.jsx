import { Outlet, NavLink } from "react-router-dom";
import styles from "./AppShell.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

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
      </div>
    </div>
  );
}
