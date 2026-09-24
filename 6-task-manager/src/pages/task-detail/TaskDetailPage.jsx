import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTask, updateTask } from "../../api";
import Form from "../../components/ui/Form";
import Button from "../../components/ui/Button";
import Label from "../../components/ui/Label";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import Option from "../../components/ui/Option";
import Textarea from "../../components/ui/Textarea";
import Badge from "../../components/ui/Badge";

export default function TaskDetailPage({
  error,
  setError,
  tasksIsLoading,
  setTasksIsLoading,
}) {
  const [taskDetail, setTaskDetail] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("todo");
  const [priority, setPriority] = useState("low");
  const navigate = useNavigate();

  // Retrieve task-detail id from the browser's URL
  const { id } = useParams();

  // Invoke the task-detail-retrieval-api service
  const handleLoadTaskDetail = async () => {
    // Toggle loading to true & clear out the error state (thus it removes any previous error msg)
    setTasksIsLoading(true);
    setError(null);
    try {
      const result = await getTask(id);
      if (result !== null) {
        setTaskDetail(result.task);
        setTitle(result.task.title);
        setDescription(result.task.description);
        setStatus(result.task.status);
        setPriority(result.task.priority);
      }
    } catch (err) {
      setError(err);
    } finally {
      setTasksIsLoading(false);
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

  // Invoke the task-update-api service
  const handleTaskUpdate = async (e) => {
    e.preventDefault();
    try {
      // Instead of storing the entire task object into a single state variable, for simplicity, I also stored each key-value pair of the task obejct into separate state variables, thus I can seamleslly construct the updated task object before forwarding that to the task-update-service
      await updateTask(id, {
        title: title,
        description: description,
        status: status,
        priority: priority,
      });
      navigate("/tasks");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <main className="flex-1 flex flex-col min-h-0 min-w-6xl max-w-6xl mx-auto">
      {error ? (
        // Display the error message if exists
        <p className="text-center">{error?.message}</p>
      ) : tasksIsLoading ? (
        // Display the loading message if `tasksIsLoading=true`
        <p className="self-center">Loading...</p>
      ) : !taskDetail ? (
        // Display "No task found" message, if no such task exists, since `taskDetail=null` is true
        <p className="text-center">No task found</p>
      ) : (
        // display the task-edit-form containing the task-detail
        <>
          {/* Close Button */}
          <div className="flex justify-end">
            {/* TODO: Create a task-edit-form button to toggle the static input fields to editable */}
            <Link to="/tasks">
              {/* Close Button */}
              <Button
                type="button"
                className="cursor-pointer self-start p-2 rounded transition-colors duration-200 ease-in-out text-slate-500 hover:text-white hover:bg-vintage-lavender-600 focus:outline-0"
                ariaLabel="Close task update/detail button"
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
              </Button>
            </Link>
          </div>
          {/* Task Detail/Edit Form */}
          <Form
            onSubmit={handleTaskUpdate}
            className="grow self-center min-w-full bg-white flex flex-col gap-4 py-4 px-8 rounded-xl"
          >
            {/* Task Title, Status, Priority */}
            <div className="form-group flex gap-4">
              {/* Task Name */}
              <div className="flex-1 flex flex-col">
                <Label htmlFor="task" className="text-sm text-shadow-grey-500">
                  Task
                </Label>
                <Input
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
                <Label
                  htmlFor="status"
                  className="text-sm text-shadow-grey-500"
                >
                  Status
                </Label>
                <Select
                  id="status"
                  className="rounded text-shadow-grey-800 px-2 py-1.5 border-[.2px] border-shadow-grey-100 focus:outline-[.2px] focus:outline-shadow-grey-200"
                  value={status}
                  onChange={(e) => handleStatusChange(e.target.value)}
                  autoComplete="off"
                >
                  <Option value="todo" className="text-shadow-grey-700">
                    Todo
                  </Option>
                  <Option value="in_progress" className="text-shadow-grey-700">
                    In Progress
                  </Option>
                  <Option value="done" className="text-shadow-grey-700">
                    Done
                  </Option>
                </Select>
              </div>
              {/* Task Priority */}
              <div className="flex flex-col">
                <Label
                  htmlFor="priority"
                  className="text-sm text-shadow-grey-500"
                >
                  Priority
                </Label>
                <Select
                  id="priority"
                  className="rounded text-shadow-grey-800 px-2 py-1.5 border-[.2px] border-shadow-grey-100 focus:outline-[.2px] focus:outline-shadow-grey-200"
                  value={priority}
                  onChange={(e) => handlePriorityChange(e.target.value)}
                  autoComplete="off"
                >
                  <Option value="low" className="text-shadow-grey-700">
                    Low
                  </Option>
                  <Option value="medium" className="text-shadow-grey-700">
                    Medium
                  </Option>
                  <Option value="high" className="text-shadow-grey-700">
                    High
                  </Option>
                </Select>
              </div>
            </div>
            {/* Task Description */}
            <div className="grow form-group flex flex-col">
              <Label
                htmlFor="description"
                className="text-sm text-shadow-grey-500"
              >
                Description
              </Label>
              <Textarea
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
              <Button
                type="submit"
                className="bg-vintage-grape-600 hover:bg-vintage-grape-500 text-white rounded py-2 px-3 flex gap-3"
                ariaLabel={`Button to update task: ${title}`}
              >
                <Badge>
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
                </Badge>
                Update task
              </Button>
            </div>
          </Form>
        </>
      )}
    </main>
  );
}
