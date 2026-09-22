import TaskCard from "./sub-section/TaskCard";

export default function TaskList({
  className,
  tasksIsLoading,
  tasks,
  onDelete,
  error,
}) {
  return (
    <div className={`py-6 flex flex-col ${className} gap-3`}>
      {error ? (
        <p className="text-center">{error?.message}</p>
      ) : tasksIsLoading ? (
        <p className="text-center">Loading...</p>
      ) : !tasks?.length ? (
        <p className="text-center">No task yet</p>
      ) : (
        tasks.map((task, index) => (
          <TaskCard task={task} onDelete={onDelete} key={index} />
        ))
      )}
    </div>
  );
}
