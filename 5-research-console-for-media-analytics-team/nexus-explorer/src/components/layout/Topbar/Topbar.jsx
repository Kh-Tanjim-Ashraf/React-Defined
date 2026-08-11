import { useState } from "react";
import styles from "./Topbar.module.css";
import Search from "./Search/Search";
import Badge from "../../ui/Badge";
import Button from "../../ui/Button";

export default function Topbar() {
  const [searchInputValue, setSearchInputValue] = useState("");

  return (
    <div className={styles.topbar}>
      <div className={styles.topbarLeftContainer}>
        <Search
          searchInputValue={searchInputValue}
          setSearchInputValue={setSearchInputValue}
        />
      </div>

      <div className={styles.topbarRightContainer}>
        <div className={styles.syncContainer}>
          <Badge className={styles.syncIndicator} badgeName="•" />
          <p>Synced 12s ago</p>
        </div>

        <div className={styles.buttonsContainer}>
          <Button
            type="button"
            className={`${styles.button} ${styles.refreshButton}`}
            buttonName="↻"
          />
          <Button
            type="button"
            className={`${styles.button} ${styles.themeButton}`}
            buttonName="⏾"
          />
          <Button
            type="button"
            className={`${styles.button} ${styles.crashTestButton}`}
            buttonName="Crash Test"
          />
        </div>
      </div>
    </div>
  );
}
