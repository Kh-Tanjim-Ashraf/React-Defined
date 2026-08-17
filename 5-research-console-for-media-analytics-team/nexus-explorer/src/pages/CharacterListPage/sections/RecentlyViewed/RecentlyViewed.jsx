import Badge from "../../../../components/ui/Badge";
import styles from "./RecentlyViewed.module.css";
import CharacterIcon from "../../../../asset/statCardIcons/characters.png";

export default function RecentlyViewed() {
  const recentlyViewed = [
    { id: 0, topic: "Pilot", meta: "Episode S01E01" },
    { id: 1, topic: "Earth (C-137)", meta: "Location • Planet" },
    { id: 2, topic: "Abadango Princess", meta: "Character • Alive" },
  ];

  return (
    <div className={styles.recentlyViewed}>
      <h2 className={styles.header}>Recently viewed</h2>
      <hr className={styles.divider} />
      <div className={styles.recentlyViewedContainer}>
        <ul>
          {recentlyViewed.map((rv, index) => (
            <>
              <li key={index} className={styles.listElement}>
                <img
                  src={CharacterIcon}
                  alt="Recently Viewed Icon"
                  width={30}
                  className={styles.characterIcon}
                />
                <div className={styles.nameMetaInfo}>
                  <p className={styles.recentlyViewedTopic}>{rv.topic}</p>
                  <Badge className={styles.metaInfo} badgeName={rv.meta} />
                </div>
              </li>
              {index < recentlyViewed.length - 1 ? (
                <hr className={`${styles.divider} ${styles.listDivider}`} />
              ) : null}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
