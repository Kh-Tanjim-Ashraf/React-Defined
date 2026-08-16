import Button from "../../../../../../components/ui/Button";
import styles from "./SectionFooter.module.css";

export default function SectionFooter() {
  return (
    <>
      <div className={styles.pagination}>
        <Button
          type="button"
          className={`${styles.button} ${styles.previousNextPage}`}
          buttonName="< Prev"
        />
        <Button type="button" className={`${styles.button}`} buttonName="1" />
        <Button type="button" className={`${styles.button}`} buttonName="2" />
        <Button type="button" className={`${styles.button}`} buttonName="3" />
        <Button type="button" className={`${styles.button}`} buttonName="4" />
        <Button
          type="button"
          className={`${styles.button} ${styles.pageCollapsed}`}
          buttonName="..."
        />
        <Button type="button" className={`${styles.button}`} buttonName="42" />
        <Button
          type="button"
          className={`${styles.button} ${styles.previousNextPage}`}
          buttonName="Next >"
        />
      </div>
      <div className={styles.metaInfo}>
        Hovering "Next" prefetches page 3 into the cache
      </div>
    </>
  );
}
