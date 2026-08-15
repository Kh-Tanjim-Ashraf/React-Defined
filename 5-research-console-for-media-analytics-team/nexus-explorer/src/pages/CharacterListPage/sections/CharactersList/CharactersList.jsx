import SectionHeader from "./subSection/SectionHeader/SectionHeader";
import CharacterCard from "./subSection/CharacterCard/CharacterCard";
import SectionFooter from "./subSection/SectionFooter/SectionFooter";
import styles from "./CharactersList.module.css";

export default function CharactersList() {
  return (
    <div className={styles.charactersList}>
      <div className="header">
        <SectionHeader />
      </div>
      <hr className={styles.divider} />
      <div className="characterCardsContainer">
        <CharacterCard />
        <CharacterCard />
      </div>
      <hr className={styles.divider} />
      <div className="footer">
        <SectionFooter />
      </div>
    </div>
  );
}
