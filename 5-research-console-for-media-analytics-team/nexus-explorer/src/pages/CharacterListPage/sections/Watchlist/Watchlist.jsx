import Badge from "../../../../components/ui/Badge";
import styles from "./Watchlist.module.css";
import CharacterIcon from "../../../../asset/statCardIcons/characters.png";

export default function Watchlist() {
  const watchList = [
    { id: 0, name: "Rick Sancez", species: "Human", status: "Alive" },
    { id: 1, name: "Summer Smith", species: "Human", status: "Alive" },
    { id: 2, name: "Abradolf Lincler", species: "Human", status: "Unknown" },
    { id: 3, name: "Bird Person", species: "Alien", status: "Dead" },
  ];

  return (
    <div className={styles.watchlist}>
      <div className={styles.header}>
        <h2>Watchlist</h2>
        <p>Clear all</p>
      </div>
      <hr className={styles.divider} />
      <div className={styles.watchListContainer}>
        <ul>
          {watchList.map((wl, index) => (
            <div key={index} className={styles.listElement}>
              <li>
                <div className={styles.leftSideContainer}>
                  <img
                    src={CharacterIcon}
                    alt="Watchlist Icon"
                    width={30}
                    className={styles.characterIcon}
                  />
                  <div className={styles.nameMetaInfo}>
                    <p className={styles.watchlistName}>{wl.name}</p>
                    <Badge
                      className={styles.metaInfo}
                      badgeName="Human • Alive"
                    />
                  </div>
                </div>
                <div className={styles.rightSideContainer}>
                  <Badge className={styles.removeAction} badgeName="✖" />
                </div>
              </li>
              {index < watchList.length - 1 ? (
                <hr className={`${styles.divider} ${styles.listDivider}`} />
              ) : null}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
