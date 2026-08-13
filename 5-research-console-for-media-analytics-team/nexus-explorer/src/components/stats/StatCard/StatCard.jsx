import Card from "../../ui/Card";
import Image from "../../ui/Image";
import styles from "./StatCard.module.css";

export default function StatCard({
  icon,
  cardTitle,
  value,
  statHelperLineValue,
  iconVariant,
}) {
  return (
    <Card className={styles.statCardContainer}>
      <div className={styles.statHeader}>
        <Image
          src={icon}
          alt="Stat Icon"
          className={`${styles.iconTile} ${styles[`${iconVariant}IconTile`]}`}
        />
        <h4 className={styles.cardTitle}>{cardTitle}</h4>
      </div>
      <div className={styles.statValue}>
        <h3>{value.toString().length === 1 ? `0` + value : value}</h3>
      </div>
      <div className={styles.statHelperLine}>
        <p>{statHelperLineValue}</p>
      </div>
    </Card>
  );
}
