import DashboardIcon from "../../assets/side-navbar-icons/DashboardIcon.png";

export default function InformationListItem({
  informationName,
  value,
  children,
}) {
  return (
    <div className="py-4 border-b-[0.1px] border-slate-200 flex w-full">
      <div className="flex w-2/6 items-center gap-4">
        {/* Pass information item icon through `Children` prop */}
        {children}
        <p className="w-full text-sm text-slate-600">{informationName}</p>
      </div>
      <p className="w-full h-full text-sm">{value}</p>
    </div>
  );
}
