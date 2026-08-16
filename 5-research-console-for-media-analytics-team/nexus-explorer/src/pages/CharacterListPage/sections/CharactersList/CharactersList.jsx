import SectionHeader from "./subSection/SectionHeader/SectionHeader";
import CharacterCard from "./subSection/CharacterCard/CharacterCard";
import SectionFooter from "./subSection/SectionFooter/SectionFooter";
import styles from "./CharactersList.module.css";

export default function CharactersList() {
  const characters = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className={styles.charactersList}>
      <div className={styles.header}>
        <SectionHeader />
      </div>
      <hr className={styles.divider} />
      <div className={styles.characterCardsContainer}>
        {characters.map((character, index) => (
          <CharacterCard key={index} />
        ))}
      </div>
      <hr className={styles.divider} />
      <div className={styles.footer}>
        <SectionFooter />
      </div>
    </div>
  );
}
