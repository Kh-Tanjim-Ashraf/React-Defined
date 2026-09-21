import TaskCard from "./TaskCard";

export default function TaskList({ className, tasks }) {
  return (
    <div className={`py-6 flex flex-col ${className} gap-3`}>
      {/* 
      1. tasks is undefined when there is issue in the server.
      2. Thus to check the length of 'tasks' array, the pre-condition is to ensure the 'tasks' is not undefined.
      */}
      {tasks !== undefined && tasks.length ? (
        // Task cards
        tasks.map((task, index) => <TaskCard task={task} key={index} />)
      ) : (
        <p className="text-center text-slate-400">No tasks yet</p>
      )}
    </div>
  );
}
