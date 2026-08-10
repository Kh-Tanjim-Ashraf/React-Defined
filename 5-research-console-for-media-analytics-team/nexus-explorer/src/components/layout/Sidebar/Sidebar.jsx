import { Link, NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import NexusExplorerLogo from "../../../asset/nexus-explorer-logo.png";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Link to="/">
        <div className={styles.brandContainer}>
          <img src={NexusExplorerLogo} alt="Nexus Explorer Logo" />
          <h2>Nexus Explorer</h2>
          <span className={styles.subtitle}>Character Intelligence</span>
        </div>
      </Link>
      <div className={styles.navLinkContainer}>
        <div className="exploreContainer">
          <p className={styles.navLinksGroupHeader}>Explore</p>
          <ul className={styles.navLinksList}>
            <li className="navLink">
              <NavLink to="/">Dashboard</NavLink>
            </li>
            <li className="navLink">
              <NavLink to="/characters">Characters</NavLink>
            </li>
            <li className="navLink">
              <NavLink to="/episodes">Episodes</NavLink>
            </li>
            <li className="navLink">
              <NavLink to="/locations">Locations</NavLink>
            </li>
          </ul>
        </div>
        <div className="personalContainer">
          <p className={styles.navLinksGroupHeader}>Personal</p>
          <ul className={styles.navLinksList}>
            <li className="navLink">
              <NavLink to="/watchlist">Watchlist</NavLink>
            </li>
            <li className="navLink">
              <NavLink to="/settings">Settings</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.cacheStatusBoxContainer}>
        <p>React Query Cache</p>
        <span>12 queries cached • 2 stale</span>
        <span>Background refetch: on focus</span>
      </div>
    </div>
  );
}
