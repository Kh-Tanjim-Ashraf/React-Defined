import TaskCard from "./TaskCard";

export default function TaskList({ className }) {
  return (
    <div className={`py-6 flex flex-col ${className} gap-3`}>
      {/* Task cards */}
      {(() => {
        const taskCardArr = [];

        for (let i = 0; i < 5; i++) {
          taskCardArr.push(<TaskCard key={i} />);
        }

        return taskCardArr;
      })()}
    </div>
  );
}
