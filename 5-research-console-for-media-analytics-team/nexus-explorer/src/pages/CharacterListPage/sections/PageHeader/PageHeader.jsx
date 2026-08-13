import Badge from "../../../../components/ui/Badge";
import Button from "../../../../components/ui/Button";
import styles from "./PageHeader.module.css";

export default function PageHeader() {
  return (
    <div className={styles.pageHeader}>
      <div className={styles.pageTitleContainer}>
        <h2>Characters</h2>
        <Badge
          className={styles.metaInfo}
          badgeName="Browse 826 characters • filtered results update the URL so the view is shareable."
        />
      </div>

      <div className={styles.buttonsContainer}>
        <Button
          type="button"
          className={styles.sortByNameButton}
          buttonName="↑↓ Sort: Name A-Z"
        />
        <Button
          type="button"
          className={styles.filterButton}
          buttonName="Filters"
        />
        <Button
          type="button"
          className={styles.viewWatchlistButton}
          buttonName="★ View watchlist"
        />
      </div>
    </div>
  );
}
