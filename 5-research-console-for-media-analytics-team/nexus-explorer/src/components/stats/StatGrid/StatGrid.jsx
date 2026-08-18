import StatCard from "../StatCard/StatCard";
import Badge from "../../ui/Badge";
import CharacterIcon from "../../../asset/statCardIcons/characters.png";
import CharacterAliveIcon from "../../../asset/statCardIcons/character-alive.png";
import CharacterDeadIcon from "../../../asset/statCardIcons/character-dead.png";
import WatchlistIcon from "../../../asset/statCardIcons/watchlist.png";
import styles from "./StatGrid.module.css";

export default function StatGrid({
  charactersInfo,
  charactersAliveInfo,
  charactersDeadInfo,
}) {
  const totalCharacters = charactersInfo ? charactersInfo.count : null;

  const totalCharactersAlive = charactersAliveInfo
    ? charactersAliveInfo.count
    : null;

  const totalCharactersDead = charactersDeadInfo
    ? charactersDeadInfo.count
    : null;

  const totalCharacterPages = charactersInfo ? charactersInfo.pages : null;

  const cards = [
    {
      id: 0,
      cardTitle: "Total Characters",
      value: totalCharacters,
      statHelperLineValue: (
        <>
          from
          <Badge
            className={styles.statHelperLineBadge}
            badgeName=" /character "
          />
          meta • {totalCharacterPages} pages
        </>
      ),
      icon: CharacterIcon,
      iconVariant: "total",
    },
    {
      id: 1,
      cardTitle: "Alive",
      value: totalCharactersAlive,
      statHelperLineValue: (
        <>
          <Badge
            className={styles.statHelperLineBadge}
            badgeName={`${((totalCharactersAlive / totalCharacters) * 100).toFixed(1)}% `}
          />
          of all characters
        </>
      ),
      icon: CharacterAliveIcon,
      iconVariant: "alive",
    },
    {
      id: 2,
      cardTitle: "Dead",
      value: totalCharactersDead,
      statHelperLineValue: (
        <>
          <Badge
            className={styles.statHelperLineBadge}
            badgeName={`${((totalCharactersDead / totalCharacters) * 100).toFixed(1)}% `}
          />
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
          value={card.value || ""} // Returns the first truthy value it encounters from left to right.
          statHelperLineValue={card.statHelperLineValue}
          iconVariant={card.iconVariant}
        />
      ))}
    </div>
  );
}
