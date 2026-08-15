import Badge from "../../../../components/ui/Badge";
import CharacterCard from "./subSection/CharacterCard";
import Button from "../../../../components/ui/Button";
import styles from "./CharactersList.module.css";

export default function CharactersList() {
  return (
    <div className={styles.charactersList}>
      <div className="header">
        <div className="headerTextContainer">
          <h3>Results</h3>
          <Badge badgeName="background refetching" />
        </div>
        <div className="prefetchAction">Prefetch next page▸</div>
      </div>
      <hr className={styles.divider} />
      <div className="characterCardsContainer">
        <CharacterCard />
        <CharacterCard />
      </div>
      <hr className={styles.divider} />
      <div className="footer">
        <div className="pagination">
          <Button type="button" className="previousPage" buttonName="Prev" />
          <Button type="button" className="pageNumber" buttonName="1" />
          <Button type="button" className="pageNumber" buttonName="2" />
          <Button type="button" className="pageNumber" buttonName="3" />
          <Button type="button" className="pageNumber" buttonName="4" />
          <Button type="button" className="pageCollapsed" buttonName="..." />
          <Button type="button" className="pageNumber" buttonName="42" />
          <Button type="button" className="nextPage" buttonName="Next" />
        </div>
        <div className="metaInfo">
          Hovering "Next" prefetches page 3 into the cache
        </div>
      </div>
    </div>
  );
}
