import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppShell from "./layout/AppShell";
import TaskListPage from "./pages/task-list/TaskListPage";
import TaskDetailPage from "./pages/task-detail/TaskDetailPage";
import NotFoundPage from "./pages/404-not-found/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout/AppShell */}
        <Route path="tasks" element={<AppShell />}>
          {/* Child Pages/Components that will be rendered into the `<Outlet />` component */}
          <Route index element={<TaskListPage />} />
          <Route path="detail/:id" element={<TaskDetailPage />} />
          {/* 404 Not Found Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
