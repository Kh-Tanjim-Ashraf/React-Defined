import Chip from "../../../../components/ui/Chip";
import Badge from "../../../../components/ui/Badge";
import Select from "../../../../components/ui/Select";
import styles from "./StatusFilter.module.css";

export default function StatusFilter() {
  const chips = [
    // { id: 0, name: "All", counter: 826 },
    { id: 1, name: "Alive", counter: 439 },
    { id: 2, name: "Dead", counter: 287 },
    { id: 3, name: "Unknown", counter: 100 },
  ];

  const species = [
    "Alien",
    "Humanoid",
    "Animal",
    "Robot",
    "Cronenberg",
    "Poopybutthole",
    "Mythological Creature",
    "Disease",
    "Unknown",
  ];

  const genders = ["Male", "Female", "Genderless", "Unknown"];

  return (
    <div className={styles.statusFilter}>
      <div className={styles.filterChipsContainer}>
        <p className={styles.sectionHeader}>Status</p>
        <Chip className={`${styles.chip} ${styles.chipActive}`}>
          <p>All</p>{" "}
          <Badge
            className={`${styles.chipCounter} ${styles.chipCounterActive}`}
            badgeName="826"
          />
        </Chip>
        {chips.map((chip) => (
          <Chip key={chip.id} className={styles.chip}>
            <p>{chip.name}</p>{" "}
            <Badge className={styles.chipCounter} badgeName={chip.counter} />
          </Chip>
        ))}
        <Select
          id="speciesSelect"
          className={`${styles.selectControl} ${styles.speciesSelect}`}
        >
          <option value="Human">Species: Human</option>
          {species.map((sp, index) => (
            <option key={index} value={sp}>
              Species: {sp}
            </option>
          ))}
        </Select>
        <Select
          id="genderSelect"
          className={`${styles.selectControl} ${styles.genderSelect}`}
        >
          <option value="Any">Gender: Any</option>
          {genders.map((gnd, index) => (
            <option key={index} value={gnd}>
              Gender: {gnd}
            </option>
          ))}
        </Select>
      </div>
      <hr className={styles.divider} />
      <div className={styles.filterQueryMetaContainer}>
        <div className={styles.activeQueryString}>
          <Badge className="activeQueryLabel" badgeName="Active query" />
          <pre>
            <code>?page=2&status=&species=Human&q=sm</code>
          </pre>
        </div>
        <p>
          Showing{" "}
          <Badge className={styles.charactersBatchCount} badgeName="20" /> of{" "}
          <Badge className={styles.charactersTotalCount} badgeName="826" /> •
          fetched in 180ms •{" "}
          <Badge className={styles.MetaInfoBadge} badgeName="from cache" />
        </p>
      </div>
    </div>
  );
}
