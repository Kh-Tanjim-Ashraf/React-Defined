export default function TaskCard({ task }) {
  return (
    <div className="mx-auto bg-slate-100 p-2 rounded-xl min-w-lg max-w-md">
      <h3 className="text-lg font-semibold">{task.title}</h3>
      <p className="text-xs text-slate-700">{task.description}</p>
      <div className="flex mt-2 gap-3 justify-end">
        <span className="text-[10px] font-medium bg-amber-300 p-1 rounded-full">
          {task.priority}
        </span>
        <span className="text-[10px] font-medium bg-teal-300 p-1 rounded-full">
          {task.status}
        </span>
      </div>
    </div>
  );
}
