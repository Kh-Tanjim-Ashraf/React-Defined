import Breadcrumbs from "../../components/layout/Breadcrumbs/Breadcrumbs";
import PageHeader from "./sections/PageHeader/PageHeader";
import StatGrid from "../../components/stats/StatGrid/StatGrid";
import StatusFilter from "./sections/StatusFilter/StatusFilter";
import CharactersList from "./sections/CharactersList/CharactersList";
import Watchlist from "./sections/Watchlist/Watchlist";
import RecentlyViewed from "./sections/RecentlyViewed/RecentlyViewed";
import DataFreshness from "./sections/DataFreshness/DataFreshness";
import styles from "./CharacterListPage.module.css";

export default function CharacterListPage() {
  return (
    <div className={styles.characterList}>
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs />
      {/* Page Header: Page title, sort, filter & watchlist button */}
      <PageHeader />
      {/* Stat Grid */}
      <StatGrid />
      {/* Page Content */}
      <div className={styles.pageContent}>
        <div className={styles.leftSideContainer}>
          <StatusFilter />
          <CharactersList />
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
