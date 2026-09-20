import TaskForm from "./components/task-form/TaskForm";
import TaskList from "./components/task-list/TaskList";

function App() {
  return (
    <div className="bg-slate-50 h-screen flex flex-col">
      <header className="h-20 bg-amber-100">
        <h1 className="text-6xl">Task Management System</h1>
      </header>
      <main className="flex-1 flex flex-col">
        <TaskForm />
        <TaskList className="grow" />
      </main>
      <footer className="bg-slate-200 h-10">
        <p className="text-slate-600 text-center">Sitemap</p>
      </footer>
    </div>
  );
}

export default App;
