import { NavLink, useParams } from "react-router-dom";

export default function TaskDetailPage() {
  // Retrieve task-detail id from the browser's URL
  const { id } = useParams();

  return (
    <main className="flex-1 flex flex-col min-h-0">
      <NavLink to="/tasks">Task List</NavLink>
      <p className="text-center">Task Detail Page</p>
      <p className="text-center">Task ID: {id}</p>
    </main>
  );
}
