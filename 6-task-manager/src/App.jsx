import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="bg-slate-50 h-screen flex flex-col">
      <header className="h-20 bg-amber-100">
        <h1 className="text-6xl">Task Management System</h1>
      </header>
      <main className="flex-1">
        <TaskForm />
        <TaskList />
      </main>
      <footer className="bg-slate-200 h-10">
        <p className="text-slate-600">Sitemap</p>
      </footer>
    </div>
  );
}

export default App;
