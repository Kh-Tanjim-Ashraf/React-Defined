import { useState, useEffect } from "react";
import Breadcrumbs from "../../components/layout/Breadcrumbs/Breadcrumbs";
import PageHeader from "./sections/PageHeader/PageHeader";
import StatGrid from "../../components/stats/StatGrid/StatGrid";
import StatusFilter from "./sections/StatusFilter/StatusFilter";
import CharactersList from "./sections/CharactersList/CharactersList";
import Watchlist from "./sections/Watchlist/Watchlist";
import RecentlyViewed from "./sections/RecentlyViewed/RecentlyViewed";
import DataFreshness from "./sections/DataFreshness/DataFreshness";
import { endpoints } from "../../api/endpoints";
import { get } from "../../api/http";
import styles from "./CharacterListPage.module.css";

export default function CharacterListPage() {
  const [characters, setCharacters] = useState("");
  const [charactersAlive, setCharactersAlive] = useState("");
  const [charactersDead, setCharactersDead] = useState("");

  useEffect(() => {
    async function fetchCharacters() {
      const data = await get(endpoints.characters);
      setCharacters(data);
    }

    async function fetchAlivedCharacters() {
      const data = await get(endpoints.charactersFiltered("status", "alive"));
      setCharactersAlive(data);
    }

    async function fetchDeadCharacters() {
      const data = await get(endpoints.charactersFiltered("status", "dead"));
      setCharactersDead(data);
    }

    fetchCharacters();
    fetchAlivedCharacters();
    fetchDeadCharacters();
  }, []);

  // console.log("characters-alive:", charactersAlive.info);

  return (
    <div className={styles.characterList}>
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs />
      {/* Page Header: Page title, sort, filter & watchlist button */}
      <PageHeader />
      {/* Stat Grid */}
      <StatGrid
        charactersInfo={characters.info}
        charactersAliveInfo={charactersAlive.info}
        charactersDeadInfo={charactersDead.info}
      />
      {/* Page Content */}
      <div className={styles.pageContent}>
        <div className={styles.leftSideContainer}>
          <StatusFilter />
          <CharactersList characters={characters} />
        </div>
        <div className={styles.rightSideContainer}>
          <Watchlist />
          <RecentlyViewed />
          <DataFreshness />
        </div>
      </div>
    </div>
  );
}
