import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppShell from "./components/layout/AppShell/AppShell";
import Dashboard from "./pages/DashboardPage/DashboardPage";
import CharacterList from "./pages/CharacterListPage/CharacterListPage";
import EpisodeList from "./pages/EpisodeList/EpisodeListPage";
import LocationList from "./pages/LocationListPage/LocationListPage";
import Watchlist from "./pages/WatchlistPage/WatchlistPage";
import Settings from "./pages/SettingsPage/SettingsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route index element={<Dashboard />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/episodes" element={<EpisodeList />} />
          <Route path="/locations" element={<LocationList />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
