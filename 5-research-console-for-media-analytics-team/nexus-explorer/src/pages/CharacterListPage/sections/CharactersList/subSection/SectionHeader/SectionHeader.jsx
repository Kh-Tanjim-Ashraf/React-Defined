import Badge from "../../../../../../components/ui/Badge";
import styles from "./SectionHeader.module.css";

export default function SectionHeader() {
  return (
    <>
      <div className={styles.headerTextContainer}>
        <h3>Results</h3>
        <Badge
          className={styles.backgroundRefetch}
          badgeName="background refetching..."
        />
      </div>
      <div className={styles.prefetchAction}>Prefetch next page▸</div>
    </>
  );
}
