export default function TaskCard({ key }) {
  return (
    <div id={key} className="mx-auto bg-slate-100 p-2 rounded-xl max-w-md">
      <h3 className="text-lg font-semibold">Task-1</h3>
      <p className="text-xs text-slate-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cum
        vitae inventore aut. Omnis illum reprehenderit, nesciunt, odio iusto,
        doloribus provident voluptate exercitationem culpa consequuntur odit
        vero fuga sed fugit!...
      </p>
      <div className="flex mt-2 gap-3 justify-end">
        <span className="text-[10px] font-medium bg-amber-300 p-1 rounded-full">
          Priority
        </span>
        <span className="text-[10px] font-medium bg-teal-300 p-1 rounded-full">
          Status
        </span>
      </div>
    </div>
  );
}
