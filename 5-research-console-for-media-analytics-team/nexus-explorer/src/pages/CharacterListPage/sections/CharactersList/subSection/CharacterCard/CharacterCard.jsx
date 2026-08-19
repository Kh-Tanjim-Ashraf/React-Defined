import { Link } from "react-router-dom";
import Card from "../../../../../../components/ui/Card";
import Image from "../../../../../../components/ui/Image";
import Badge from "../../../../../../components/ui/Badge";
import styles from "./CharacterCard.module.css";

export default function CharacterCard({ character }) {
  return (
    <Card className={styles.characterCard}>
      <div className={styles.imageContainer}>
        <Image
          src={character.image}
          alt="Character Image"
          className={styles.characterImage}
        />
        <Badge className={styles.watchlistBadge} badgeName="★" />
      </div>
      <div className={styles.informationContainer}>
        <p className={styles.cardHeader}>{character.name}</p>
        <Badge
          className={styles.headerSubtitle}
          badgeName={`${character.species} • ${character.gender} • ${character.origin.name}`}
        />
        <div className={styles.cardBottom}>
          <Badge
            className={`${styles.characterStatus} ${styles[`chStat${character.status === "unknown" ? "Unknown" : character.status}`]}`}
            badgeName={`${character.status === "unknown" ? "Unknown" : character.status}`}
          />
          <Link className={styles.detailLink}>Details →</Link>
        </div>
      </div>
    </Card>
  );
}
