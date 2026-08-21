import SectionHeader from "./subSection/SectionHeader/SectionHeader";
import CharacterCard from "./subSection/CharacterCard/CharacterCard";
import SectionFooter from "./subSection/SectionFooter/SectionFooter";
import styles from "./CharactersList.module.css";

export default function CharactersList({ characters, handlePageNumberClick }) {
  const isLoading = !characters; // If characters null then isLoading=true, otherwise false

  return (
    <div className={styles.charactersList}>
      <div className={styles.header}>
        <SectionHeader />
      </div>
      <hr className={styles.divider} />
      <div className={styles.characterCardsContainer}>
        {isLoading ? (
          <h3>Loading data...</h3>
        ) : (
          characters.results.map((character, index) => (
            <CharacterCard key={character.id} character={character} />
          ))
        )}
      </div>
      <hr className={styles.divider} />
      <div className={styles.footer}>
        <SectionFooter
          charactersInfo={characters.info}
          handlePageNumberClick={handlePageNumberClick}
        />
      </div>
    </div>
  );
}
