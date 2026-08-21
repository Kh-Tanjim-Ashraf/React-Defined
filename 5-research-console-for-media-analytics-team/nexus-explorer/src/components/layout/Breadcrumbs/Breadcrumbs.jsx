import { NavLink, useLocation } from "react-router-dom";
import Badge from "../../ui/Badge";
import styles from "./Breadcrumbs.module.css";

export default function Breadcrumbs() {
  const location = useLocation(); // Retrieves URL string from the browser
  const paths = location.pathname.split("/").filter(Boolean); // Filtered out any empty list elements using the `filter(Boolean)` function

  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
      <ol>
        <li>
          <NavLink to="/">Explore</NavLink>
        </li>

        {paths.map((path, index) => {
          const url = "/" + paths.slice(0, index + 1).join("/");
          const isLast = index === paths.length - 1;

          return (
            <li key={url}>
              <span className={styles.separator}>&gt;</span>
              {isLast ? (
                <Badge className={styles.activeBreadcrumb} badgeName={path} />
              ) : (
                <NavLink to={url}>{path}</NavLink>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
