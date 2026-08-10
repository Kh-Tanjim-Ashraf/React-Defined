import { Link, NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import NexusExplorerLogo from "../../../asset/nexus-explorer-logo.png";
import DashboardIcon from "../../../asset/navIcons/dashboard.png";
import CharactersIcon from "../../../asset/navIcons/characters.png";
import EpisodesIcon from "../../../asset/navIcons/episodes.png";
import LocationsIcon from "../../../asset/navIcons/locations.png";
import WatchlistIcon from "../../../asset/navIcons/watchlist.png";
import SettingsIcon from "../../../asset/navIcons/settings.png";

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
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.activeLink : styles.inactiveLink}`
              }
            >
              <li>
                <img
                  src={DashboardIcon}
                  alt="Dashboard Icon"
                  className={styles.navLinkIcon}
                />
                <span className={styles.navLinkText}>Dashboard</span>
              </li>
            </NavLink>
            <NavLink
              to="/characters"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.activeLink : styles.inactiveLink}`
              }
            >
              {({ isActive }) => (
                <li>
                  <img
                    src={CharactersIcon}
                    alt="Characters"
                    className={styles.navLinkIcon}
                  />
                  <span className={styles.navLinkText}>Characters</span>

                  <span
                    className={
                      isActive
                        ? `${styles.countPill} ${styles.countPillActive}`
                        : styles.countPill
                    }
                  >
                    826
                  </span>
                </li>
              )}
            </NavLink>
            <NavLink
              to="/episodes"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.activeLink : styles.inactiveLink}`
              }
            >
              {({ isActive }) => (
                <li>
                  <img
                    src={EpisodesIcon}
                    alt="Episodes Icon"
                    className={styles.navLinkIcon}
                  />
                  <span className={styles.navLinkText}>Episodes</span>

                  <span
                    className={
                      isActive
                        ? `${styles.countPill} ${styles.countPillActive}`
                        : styles.countPill
                    }
                  >
                    51
                  </span>
                </li>
              )}
            </NavLink>
            <NavLink
              to="/locations"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.activeLink : styles.inactiveLink}`
              }
            >
              {({ isActive }) => (
                <li>
                  <img
                    src={LocationsIcon}
                    alt="Locations Icon"
                    className={styles.navLinkIcon}
                  />
                  <span className={styles.navLinkText}>Locations</span>

                  <span
                    className={
                      isActive
                        ? `${styles.countPill} ${styles.countPillActive}`
                        : styles.countPill
                    }
                  >
                    126
                  </span>
                </li>
              )}
            </NavLink>
          </ul>
        </div>
        <div className="personalContainer">
          <p className={styles.navLinksGroupHeader}>Personal</p>
          <ul className={styles.navLinksList}>
            <NavLink
              to="/watchlist"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.activeLink : styles.inactiveLink}`
              }
            >
              {({ isActive }) => (
                <li>
                  <img
                    src={WatchlistIcon}
                    alt="Watchlist Icon"
                    className={styles.navLinkIcon}
                  />
                  <span className={styles.navLinkText}>Watchlist</span>

                  <span
                    className={
                      isActive
                        ? `${styles.countPill} ${styles.countPillActive}`
                        : styles.countPill
                    }
                  >
                    4
                  </span>
                </li>
              )}
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.activeLink : styles.inactiveLink}`
              }
            >
              <li>
                <img
                  src={SettingsIcon}
                  alt="Settings Icon"
                  className={styles.navLinkIcon}
                />
                <span className={styles.navLinkText}>Settings</span>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
      <div className={styles.cacheStatusBoxContainer}>
        <p className={styles.reactQueryCacheHeader}>React Query Cache</p>
        <p>12 queries cached • 2 stale</p>
        <p>Background refetch: on focus</p>
      </div>
    </div>
  );
}
