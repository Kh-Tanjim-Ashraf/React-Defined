import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("todo");
  const [priority, setPriority] = useState("low");

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
    setStatus("todo");
    setPriority("low");
  };

  const handleStatusChange = (selectedStatus) => {
    setStatus(selectedStatus);
  };

  const handlePriorityChange = (selectedPriority) => {
    setPriority(selectedPriority);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="self-center min-w-7xl bg-white flex flex-col gap-4 py-4 px-8 rounded-2xl"
    >
      <h2 className="text-2xl text-shadow-grey-600 self-center">
        New Task Form
      </h2>
      <div className="form-group flex gap-4">
        {/* Task Name */}
        <div className="flex-1 flex flex-col">
          <label htmlFor="task" className="text-sm text-shadow-grey-500">
            Task
          </label>
          <input
            id="task"
            type="text"
            className="rounded text-shadow-grey-800 px-2 py-1.5 placeholder:font-light placeholder-shadow-grey-200 focus:placeholder:font-light border-[.2px] border-shadow-grey-100 focus:outline-[.2px] focus:outline-shadow-grey-200"
            placeholder="Task name..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoComplete="off"
          />
        </div>
        {/* Task Status */}
        <div className="flex flex-col">
          <label htmlFor="status" className="text-sm text-shadow-grey-500">
            Status
          </label>
          <select
            id="status"
            className="rounded text-shadow-grey-800 px-2 py-1.5 border-[.2px] border-shadow-grey-100 focus:outline-[.2px] focus:outline-shadow-grey-200"
            value={status}
            onChange={(e) => handleStatusChange(e.target.value)}
            autoComplete="off"
          >
            <option value="todo" className="text-shadow-grey-700">
              Todo
            </option>
            <option value="in_progress" className="text-shadow-grey-700">
              In Progress
            </option>
            <option value="done" className="text-shadow-grey-700">
              Done
            </option>
          </select>
        </div>
        {/* Task Priority */}
        <div className="flex flex-col">
          <label htmlFor="priority" className="text-sm text-shadow-grey-500">
            Priority
          </label>
          <select
            id="priority"
            className="rounded text-shadow-grey-800 px-2 py-1.5 border-[.2px] border-shadow-grey-100 focus:outline-[.2px] focus:outline-shadow-grey-200"
            value={priority}
            onChange={(e) => handlePriorityChange(e.target.value)}
            autoComplete="off"
          >
            <option value="low" className="text-shadow-grey-700">
              Low
            </option>
            <option value="medium" className="text-shadow-grey-700">
              Medium
            </option>
            <option value="high" className="text-shadow-grey-700">
              High
            </option>
          </select>
        </div>
      </div>
      {/* Task Description */}
      <div className="form-group flex flex-col">
        <label htmlFor="description" className="text-sm text-shadow-grey-500">
          Description
        </label>
        <textarea
          id="description"
          type="textarea"
          className="h-32 w-auto resize-none overflow-scroll scrollbar-none rounded text-shadow-grey-800 px-2 py-1.5 placeholder:font-light placeholder-shadow-grey-200 focus:placeholder:font-light border-[.2px] border-shadow-grey-100 focus:outline-[.2px] focus:outline-shadow-grey-200"
          placeholder="What needs to be done?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          autoComplete="off"
        />
      </div>
      <div className="form-group flex justify-center">
        <button
          type="submit"
          className="bg-vintage-grape-600 hover:bg-vintage-grape-500 text-white rounded py-1 px-3"
        >
          + Add task
        </button>
      </div>
    </form>
  );
}
