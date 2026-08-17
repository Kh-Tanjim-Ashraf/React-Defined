import Badge from "../../../../components/ui/Badge";
import styles from "./DataFreshness.module.css";

export default function DataFreshness() {
  const dataFreshnessTypes = [
    { id: 0, type: "Fresh", metaList: "characters • page 2" },
    { id: 1, type: "Stale", metaList: "episodes • list" },
    { id: 2, type: "Idle", metaList: "locations • list" },
  ];

  return (
    <div className={styles.dataFreshness}>
      <h2 className={styles.header}>Data freshness</h2>
      <hr className={styles.divider} />
      <div className={styles.dataFreshnessContainer}>
        <ul>
          {dataFreshnessTypes.map((dft, index) => (
            <li key={index} className={styles.listElement}>
              <p
                className={`${styles.typeName} ${styles[`typeName${dft.type}`]}`}
              >
                {dft.type.toLowerCase()}
              </p>
              <Badge className={styles.metaInfo} badgeName={dft.metaList} />
            </li>
          ))}
        </ul>
        <hr className={`${styles.divider} ${styles.footerDivider}`} />
        <Badge
          className={styles.metaInfo}
          badgeName="staleTime 5 min . gcTime 30 min .
refetchOnWindowFocus true"
        />
      </div>
    </div>
  );
}
