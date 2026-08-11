import { useEffect, useRef } from "react";
import Image from "../../../ui/Image";
import Input from "../../../ui/Input";
import Badge from "../../../ui/Badge";
import styles from "./Search.module.css";
import SearchIcon from "../../../../asset/search.png";

export default function Search({ searchInputValue, setSearchInputValue }) {
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleSearchKeyboardShortcut = (event) => {
      // Keyboard Shortcut (Ctrl+k or Cmd+k) Event Listener: Search input focus toggle
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();

        // Toggle focus
        if (document.activeElement === searchInputRef.current) {
          searchInputRef.current.blur();
        } else {
          searchInputRef.current.focus();
        }
      }

      // Keyboard Shortcut (Escape): Un-focus search input field
      if (
        document.activeElement === searchInputRef.current &&
        event.key === "Escape"
      ) {
        searchInputRef.current.blur();
      }
    };

    window.addEventListener("keydown", handleSearchKeyboardShortcut);
    // Cleanup function
    return () =>
      window.removeEventListener("keydown", handleSearchKeyboardShortcut);
  }, []);

  return (
    <div className={styles.searchContainer}>
      {searchInputValue === "" && (
        <Image
          className={styles.searchIcon}
          src={SearchIcon}
          alt="search-icon"
        />
      )}

      <Input
        ref={searchInputRef}
        type="text"
        className={styles.searchInput}
        name="characterSearchInput"
        value={searchInputValue}
        onChange={(event) => setSearchInputValue(event.target.value)}
        placeholder="Search characters by name..."
      />

      {searchInputValue === "" && (
        <Badge className={styles.keyboardHint} badgeName="Ctrl K" />
      )}
    </div>
  );
}
