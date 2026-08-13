import Chip from "../../../../components/ui/Chip";
import styles from "./StatusFilter.module.css";

export default function StatusFilter() {
  const chips = [
    { id: 0, name: "All", counter: 826 },
    { id: 1, name: "Alive", counter: 439 },
    { id: 2, name: "Dead", counter: 287 },
    { id: 3, name: "Unknown", counter: 100 },
  ];

  return (
    <div className={styles.statusFilter}>
      <div className="filterChipsContainer">
        <p>Status</p>
        {chips.map((chip) => (
          <Chip key={chip.id}>
            {chip.name} {chip.counter}
          </Chip>
        ))}
      </div>
      <div className="filterQueryMetaContainer"></div>
    </div>
  );
}
