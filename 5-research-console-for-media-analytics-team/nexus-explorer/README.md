# Nexus Explorer — Character Intelligence Dashboard

## Scenario

“**Nexus Explorer**” is an internal research console used by a small media-analytics team. The team browses a large public character database, keeps a personal watchlist, and needs the console to feel instant even on a slow connection. From the console a user can:

- See a dashboard with live summary counters (characters, episodes, locations, watchlist size)
- Browse a paginated character list, filter it by status / species / gender, and search by name
- Open a single character’s detail page from its card and see everything about that character
- Browse the episode list and the location list
- Add or remove characters from a personal watchlist that is shared by the whole app
- Compare two characters side by side
- Switch between light and dark theme

Because the data source is read-only, the app never creates, edits or deletes anything on the server. The watchlist and the theme are the only things that live on the client (_React state / Context, persisted to localStorage_).

## Screenshots

### Dashboard

- Light Theme
- Dark Theme

### Characters Page

- Light Theme
- Dark Theme

### Character Detail Page

- Light Theme
- Dark Theme

### Episodes

- Light Theme
- Dark Theme

### Locations

- Light Theme
- Dark Theme

### Watchlist

- Light Theme
- Dark Theme

### Settings

- Light Theme
- Dark Theme

## Setup Instructions

1. Create a React app using Vite.

   > npm create vite@latest medicare-dashboard -- --template react

2. Navigate into the project's directory.

   > cd medicare-dashboard

3. Install the required node modules.

   > npm install

4. Run the development server.

   > npm run dev

5. To generate the production build.

   > npm run build

6. To preview the build.

   > npm run preview

7. (_Optional_) Execute the shell script **server.sh** to automate the installation of node modules & run the development server.

   > bash server.sh

## File Structure

src/ <br/>
├── api/ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&ensp; endpoints.js, http.js<br/>
├── app/ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp; router.jsx, queryClient.js, AppProviders.jsx<br/>
├── components/ <br/>
│ &emsp;&emsp;├── layout/ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;AppShell.jsx, Sidebar.jsx, Topbar.jsx, Breadcrumbs.jsx <br/>
│ &emsp;&emsp;├── ui/ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Card.jsx, Button.jsx, Badge.jsx, Chip.jsx, Skeleton.jsx, EmptyState.jsx, ErrorState.jsx, Pagination.jsx <br/>
│ &emsp;&emsp;├── stats/ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; StatGrid.jsx, StatCard.jsx <br/>
│ &emsp;&emsp;├── characters/ &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;CharacterGrid.jsx, CharacterCard.jsx, CharacterFilters.jsx <br/>
│ &emsp;&emsp;├── watchlist/ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;WatchlistPanel.jsx, WatchlistButton.jsx <br/>
│ &emsp;&emsp;└── error/ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&ensp;&ensp; ErrorBoundary.jsx, FallbackUI.jsx, CrashTest.jsx <br/>
├── contexts/ <br/>
│ &emsp;&emsp;└── theme/ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ThemeContext.jsx, ThemeProvider.jsx, useTheme.js <br/>
│ &emsp;&emsp;└── watchlist/ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;WatchlistContext.jsx, WatchlistProvider.jsx, useWatchlist.js <br/>
├── hooks/ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; useCharacters.js, useCharacter.js, useDebouncedValue.js, useRenderCount.js, usePrevious.js, useExpensiveCache.js <br/>
├── pages/ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; DashboardPage.jsx, CharacterListPage.jsx, CharacterDetailPage.jsx, EpisodeListPage.jsx, LocationListPage.jsx, WatchlistPage.jsx, ComparePage.jsx, SettingsPage.jsx, NotFoundPage.jsx <br/>
├── utils/ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp; logger.js, format.js, statusToken.js <br/>
├── App.jsx <br/>
├── main.jsx <br/>
└── index.css <br/>

## Feature List

## React Concepts Used - Requirements Mapping Table
