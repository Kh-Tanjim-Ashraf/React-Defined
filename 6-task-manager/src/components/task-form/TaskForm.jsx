import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      title: title,
      description: description,
      status: status,
      priority: priority,
    });

    // Clear the form input fields after form submission
    setTitle("");
    setDescription("");
    setStatus("");
    setPriority("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-emerald-200 py-6 flex flex-col">
      <h2 className="text-2xl font-semibold text-slate-500 text-center">
        New Task Form
      </h2>
      <div className="form-group flex justify-center">
        <label htmlFor="task">Task</label>
        <input
          id="task"
          type="text"
          className="rounded border border-black focus:outline-black"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoComplete="off"
        />
      </div>
      <div className="form-group flex justify-center">
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="textarea"
          className="rounded border border-black focus:outline-black"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          autoComplete="off"
        />
      </div>
      <div className="form-group flex justify-center">
        <label htmlFor="status">Status</label>
        <input
          id="status"
          type="text"
          className="rounded border border-black focus:outline-black"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          autoComplete="off"
        />
      </div>
      <div className="form-group flex justify-center">
        <label htmlFor="priority">Priority</label>
        <input
          id="priority"
          type="text"
          className="rounded border border-black focus:outline-black"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          autoComplete="off"
        />
      </div>
      <div className="form-group flex justify-center">
        <button type="submit" className="bg-amber-500 rounded py-1 px-3">
          + Add task
        </button>
      </div>
    </form>
  );
}
