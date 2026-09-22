import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTask } from "../../api";

export default function TaskDetailPage() {
  const [taskDetail, setTaskDetail] = useState(null);

  // Retrieve task-detail id from the browser's URL
  const { id } = useParams();

  // Invoke the task-retrieval-api service
  const handleLoadTaskDetail = async () => {
    const result = await getTask(id);
    setTaskDetail(result?.task);
  };

  useEffect(() => {
    handleLoadTaskDetail();
  }, []);

  return (
    <main className="flex-1 flex flex-col min-h-0">
      <NavLink to="/tasks" className="self-center">
        Task List
      </NavLink>
      <p className="self-center">Task Detail Page</p>
      {taskDetail !== null ? (
        <>
          <p className="self-center">Task ID: {taskDetail.id}</p>
          <p className="self-center">Task: {taskDetail.title}</p>
          <p className="self-center">Description: {taskDetail.description}</p>
          <p className="self-center">Status: {taskDetail.status}</p>
          <p className="self-center">Priority: {taskDetail.priority}</p>
        </>
      ) : (
        <p className="self-center">Loading...</p>
      )}
    </main>
  );
}
