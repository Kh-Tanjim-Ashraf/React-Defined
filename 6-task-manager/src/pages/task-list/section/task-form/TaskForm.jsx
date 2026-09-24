import { useState } from "react";
import Form from "../../../../components/ui/Form";
import Button from "../../../../components/ui/Button";
import Label from "../../../../components/ui/Label";
import Input from "../../../../components/ui/Input";
import Select from "../../../../components/ui/Select";
import Option from "../../../../components/ui/Option";
import Textarea from "../../../../components/ui/Textarea";

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
    <Form
      onSubmit={handleSubmit}
      className="self-center min-w-7xl bg-white flex flex-col gap-4 py-4 px-8 rounded-2xl"
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
            className="rounded text-shadow-grey-800 px-2 py-1.5 placeholder:font-light placeholder-shadow-grey-200 focus:placeholder:font-light border-[.2px] border-shadow-grey-100 focus:outline-[.2px] focus:outline-shadow-grey-200"
            placeholder="Task name..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoComplete="off"
          />
        </div>
        {/* Task Status */}
        <div className="flex flex-col">
          <Label htmlFor="status" className="text-sm text-shadow-grey-500">
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
            <Option value="todo" className="text-shadow-grey-700">
              In Progress
            </Option>
            <Option value="todo" className="text-shadow-grey-700">
              Done
            </Option>
          </Select>
        </div>
        {/* Task Priority */}
        <div className="flex flex-col">
          <Label htmlFor="priority" className="text-sm text-shadow-grey-500">
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
      <div className="form-group flex flex-col">
        <Label htmlFor="description" className="text-sm text-shadow-grey-500">
          Description
        </Label>
        <Textarea
          id="description"
          type="textarea"
          className="h-32 w-auto resize-none overflow-scroll scrollbar-none rounded text-shadow-grey-800 px-2 py-1.5 placeholder:font-light placeholder-shadow-grey-200 focus:placeholder:font-light border-[.2px] border-shadow-grey-100 focus:outline-[.2px] focus:outline-shadow-grey-200"
          placeholder="What needs to be done?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          autoComplete="off"
        />
      </div>
      {/* Crate Button */}
      <div className="form-group flex justify-center">
        <Button
          type="submit"
          className="bg-vintage-grape-600 hover:bg-vintage-grape-500 text-white rounded py-1 px-3"
          ariaLabel="Add new task button"
        >
          + Add task
        </Button>
      </div>
    </Form>
  );
}
