import styles from "./CharacterListPage.module.css";
import Breadcrumbs from "../../components/layout/Breadcrumbs/Breadcrumbs";
import PageHeader from "./sections/PageHeader/PageHeader";

export default function CharacterListPage() {
  return (
    <div className={styles.characterList}>
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs />
      {/* Page Header: Page title, sort, filter & watchlist button */}
      <PageHeader />
    </div>
  );
}
