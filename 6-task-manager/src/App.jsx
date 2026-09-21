import { useState, useEffect } from "react";
import TaskForm from "./components/task-form/TaskForm";
import TaskList from "./components/task-list/TaskList";
import { getTasks, addTask, deleteTask } from "./api";

function App() {
  // Defined the state variables with their default values
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [tasksIsLoading, setTasksIsLoading] = useState(false);

  useEffect(() => {
    const handleLoadTasks = async () => {
      // Toggle loading to true & clear out the error state (thus it removes any previous error msg)
      setTasksIsLoading(true);
      setError(null);
      try {
        const result = await getTasks();
        setTasks(result);
      } catch (err) {
        setError(err);
      } finally {
        setTasksIsLoading(false); // Loading is finished; Either it successfully retrieves data from the server or failed
      }
    };
    handleLoadTasks();
  }, []);

  return (
    <div className="bg-slate-50 h-screen flex flex-col">
      <header className="h-20 bg-amber-100">
        <h1 className="text-6xl">Task Management System</h1>
      </header>
      <main className="flex-1 flex flex-col">
        <TaskForm />
        <TaskList
          className="grow"
          tasksIsLoading={tasksIsLoading}
          tasks={tasks?.tasks}
          error={error}
        />
      </main>
      <footer className="bg-slate-200 h-10">
        <p className="text-slate-600 text-center">Sitemap</p>
      </footer>
    </div>
  );
}

export default App;
