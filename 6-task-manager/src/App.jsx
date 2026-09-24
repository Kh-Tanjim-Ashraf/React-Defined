import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import AppShell from "./layout/AppShell";
import TaskListPage from "./pages/task-list/TaskListPage";
import TaskDetailPage from "./pages/task-detail/TaskDetailPage";
import NotFoundPage from "./pages/404-not-found/NotFoundPage";

export default function App() {
  const [error, setError] = useState(null);
  const [tasksIsLoading, setTasksIsLoading] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect the user to the task-list page if s/he wants to access the base URL */}
        <Route path="/" element={<Navigate to="/tasks" replace />} />
        {/* Layout/AppShell component */}
        <Route path="/tasks" element={<AppShell />}>
          {/* Child pages/components that will be rendered into the `<Outlet />` component */}
          <Route
            index
            element={
              <TaskListPage
                error={error}
                setError={setError}
                tasksIsLoading={tasksIsLoading}
                setTasksIsLoading={setTasksIsLoading}
              />
            }
          />
          <Route
            path="detail/:id"
            element={
              <TaskDetailPage
                error={error}
                setError={setError}
                tasksIsLoading={tasksIsLoading}
                setTasksIsLoading={setTasksIsLoading}
              />
            }
          />
          {/* 404 Not Found Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
