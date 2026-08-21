import Button from "../../../../../../components/ui/Button";
import styles from "./SectionFooter.module.css";

export default function SectionFooter({
  charactersInfo,
  handlePageNumberClick,
}) {
  return (
    <>
      <div className={styles.pagination}>
        <Button
          type="button"
          className={`${styles.button} ${styles.previousNextPage} ${!charactersInfo?.prev && styles.notAllowed}`}
          onClick={() => handlePageNumberClick("Previous")}
          buttonName="< Prev"
        />
        {/* TODO: Implement the pagination numbered buttons later for improving to production-grade application */}
        {/* 
        <Button
          type="button"
          className={`${styles.button} ${styles.buttonSelected}`}
          onClick={handlePageNumberClick}
          buttonName="1"
        />
        <Button
          type="button"
          className={`${styles.button}`}
          onClick={handlePageNumberClick}
          buttonName="2"
        />
        <Button
          type="button"
          className={`${styles.button}`}
          onClick={handlePageNumberClick}
          buttonName="3"
        />
        <Button
          type="button"
          className={`${styles.button}`}
          onClick={handlePageNumberClick}
          buttonName="4"
        />
        <Button
          type="button"
          className={`${styles.button} ${styles.pageCollapsed}`}
          buttonName="..."
        />
        <Button
          type="button"
          className={`${styles.button}`}
          onClick={handlePageNumberClick}
          buttonName="42"
        /> 
        */}
        <Button
          type="button"
          className={`${styles.button} ${styles.previousNextPage} ${!charactersInfo?.next && styles.notAllowed}`}
          onClick={() => handlePageNumberClick("Next")}
          buttonName="Next >"
        />
      </div>
      <div className={styles.metaInfo}>
        Hovering "Next" prefetches page 3 into the cache
      </div>
    </>
  );
}
