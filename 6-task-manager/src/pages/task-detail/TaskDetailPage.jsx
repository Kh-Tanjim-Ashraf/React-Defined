import { NavLink, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTask, updateTask } from "../../api";

export default function TaskDetailPage() {
  const [taskDetail, setTaskDetail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("todo");
  const [priority, setPriority] = useState("low");
  const navigate = useNavigate();

  // Retrieve task-detail id from the browser's URL
  const { id } = useParams();

  // Invoke the task-retrieval-api service
  const handleLoadTaskDetail = async () => {
    const result = await getTask(id);
    if (result !== null) {
      setTaskDetail(result.task);
      setTitle(result.task.title);
      setDescription(result.task.description);
      setStatus(result.task.status);
      setPriority(result.task.priority);
    }
  };

  useEffect(() => {
    handleLoadTaskDetail();
  }, []);

  const handleStatusChange = (selectedStatus) => {
    setStatus(selectedStatus);
  };

  const handlePriorityChange = (selectedPriority) => {
    setPriority(selectedPriority);
  };

  const handleTaskUpdate = async (e) => {
    e.preventDefault();

    // Instead of storing the entire task object into a single state variable, for simplicity, I also stored each key-value pair of the task obejct into separate state variables, thus I can seamleslly construct the updated task object before forwarding that to the task-update-service
    await updateTask(id, {
      title: title,
      description: description,
      status: status,
      priority: priority,
    });

    navigate("/tasks");
  };

  return (
    <main className="flex-1 flex flex-col min-h-0 min-w-6xl max-w-6xl mx-auto">
      {/* For simplicity, render the task detail only if the state variable is not null */}
      {taskDetail !== null ? (
        <>
          {/* Close Button */}
          <div className="flex justify-end rounded-tl-2xl">
            {/* TODO: Convert to a close button of the task-edit-form */}
            <NavLink to="/tasks">
              {/* Close Button */}
              <button
                type="button"
                className="cursor-pointer self-start p-2 rounded transition-colors duration-200 ease-in-out text-slate-500 hover:text-white hover:bg-vintage-lavender-600 focus:outline-0"
                aria-label="Close Button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </NavLink>
          </div>
          {/* Task Detail */}
          <form
            onSubmit={handleTaskUpdate}
            className="grow self-center min-w-full bg-white flex flex-col gap-4 py-4 px-8 rounded-b-xl"
          >
            {/* Task Title, Status, Priority */}
            <div className="form-group flex gap-4">
              {/* Task Name */}
              <div className="flex-1 flex flex-col">
                <label htmlFor="task" className="text-sm text-shadow-grey-500">
                  Task
                </label>
                <input
                  id="task"
                  type="text"
                  value={title}
                  className="rounded text-shadow-grey-800 px-2 py-1.5 placeholder:font-light placeholder-shadow-grey-200 focus:placeholder:font-light border-[.2px] border-shadow-grey-100 focus:outline-[.2px] focus:outline-shadow-grey-200"
                  placeholder="Task name..."
                  onChange={(e) => setTitle(e.target.value)}
                  autoComplete="off"
                />
              </div>
              {/* Task Status */}
              <div className="flex flex-col">
                <label
                  htmlFor="status"
                  className="text-sm text-shadow-grey-500"
                >
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
                <label
                  htmlFor="priority"
                  className="text-sm text-shadow-grey-500"
                >
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
            <div className="grow form-group flex flex-col">
              <label
                htmlFor="description"
                className="text-sm text-shadow-grey-500"
              >
                Description
              </label>
              <textarea
                id="description"
                type="textarea"
                className="grow w-auto resize-none overflow-scroll scrollbar-none rounded text-shadow-grey-800 px-2 py-1.5 placeholder:font-light placeholder-shadow-grey-200 focus:placeholder:font-light border-[.2px] border-shadow-grey-100 focus:outline-[.2px] focus:outline-shadow-grey-200"
                placeholder="What needs to be done?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                autoComplete="off"
              />
            </div>
            {/* Update Button */}
            <div className="form-group flex justify-center">
              <button
                type="submit"
                className="bg-vintage-grape-600 hover:bg-vintage-grape-500 text-white rounded py-2 px-3 flex gap-3"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </span>
                Update task
              </button>
            </div>
          </form>
        </>
      ) : (
        <p className="self-center">Loading...</p>
      )}
    </main>
  );
}
