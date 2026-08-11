import { useState } from "react";
import styles from "./Topbar.module.css";
import Search from "./Search/Search";

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
        <h1>Topbar</h1>
      </div>
    </div>
  );
}
