import { useState, useEffect } from "react";
import TaskForm from "./section/task-form/TaskForm";
import TaskList from "./section/task-list/TaskList";
import { getTasks, addTask, deleteTask } from "../../api";

export default function TaskListPage() {
  // Defined the state variables with their default values
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [tasksIsLoading, setTasksIsLoading] = useState(false);

  // Load tasks
  const handleLoadTasks = async () => {
    // Toggle loading to true & clear out the error state (thus it removes any previous error msg)
    setTasksIsLoading(true);
    setError(null);
    try {
      const result = await getTasks();
      setTasks(result?.tasks);
    } catch (err) {
      setError(err);
    } finally {
      setTasksIsLoading(false); // Loading is finished; Either it successfully retrieves data from the server or failed
    }
  };

  useEffect(() => {
    handleLoadTasks();
  }, []);

  // Create a new task
  const handleCreateTask = async (task) => {
    try {
      const newTask = await addTask(task); // Sent POST request to create data into the DB
      setTasks([...tasks, newTask?.task]); // Update the tasks array
    } catch (error) {
      setError(error.message);
    }
  };

  // Delete an existing task
  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks([...updatedTasks]);
  };

  return (
    <main className="flex-1 flex flex-col min-h-0">
      <TaskForm onAdd={handleCreateTask} />
      <TaskList
        className="grow"
        tasksIsLoading={tasksIsLoading}
        tasks={tasks}
        onDelete={handleDeleteTask}
        error={error}
      />
    </main>
  );
}
