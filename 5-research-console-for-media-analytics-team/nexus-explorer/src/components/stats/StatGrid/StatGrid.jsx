import StatCard from "../StatCard/StatCard";
import Badge from "../../ui/Badge";
import CharacterIcon from "../../../asset/statCardIcons/characters.png";
import CharacterAliveIcon from "../../../asset/statCardIcons/character-alive.png";
import CharacterDeadIcon from "../../../asset/statCardIcons/character-dead.png";
import WatchlistIcon from "../../../asset/statCardIcons/watchlist.png";
import styles from "./StatGrid.module.css";

export default function StatGrid() {
  const cards = [
    {
      id: 0,
      cardTitle: "Total Characters",
      value: 826,
      statHelperLineValue: (
        <>
          from
          <Badge
            className={styles.statHelperLineBadge}
            badgeName=" /character "
          />
          meta • 42 pages
        </>
      ),
      icon: CharacterIcon,
      iconVariant: "total",
    },
    {
      id: 1,
      cardTitle: "Alive",
      value: 439,
      statHelperLineValue: (
        <>
          <Badge className={styles.statHelperLineBadge} badgeName="53.1% " />
          of all characters
        </>
      ),
      icon: CharacterAliveIcon,
      iconVariant: "alive",
    },
    {
      id: 2,
      cardTitle: "Dead",
      value: 287,
      statHelperLineValue: (
        <>
          <Badge className={styles.statHelperLineBadge} badgeName="34.7% " />
          of all characters
        </>
      ),
      icon: CharacterDeadIcon,
      iconVariant: "dead",
    },
    {
      id: 3,
      cardTitle: "In Watchlist",
      value: 4,
      statHelperLineValue: `stored in Watchlist Context`,
      icon: WatchlistIcon,
      iconVariant: "watchlist",
    },
  ];

  return (
    <div className={styles.statGridContainer}>
      {cards.map((card) => (
        <StatCard
          key={card.id}
          icon={card.icon}
          cardTitle={card.cardTitle}
          value={card.value}
          statHelperLineValue={card.statHelperLineValue}
          iconVariant={card.iconVariant}
        />
      ))}
    </div>
  );
}
