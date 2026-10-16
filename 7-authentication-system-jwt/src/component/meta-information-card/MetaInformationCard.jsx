import DashboardIcon from "../../assets/side-navbar-icons/DashboardIcon.png";

export default function MetaInformationCard({
  informationName,
  value,
  useIcon = true,
}) {
  return (
    <div className="py-2 bg-purple-400 border-b flex w-full">
      <div className="flex w-2/5">
        {useIcon && (
          <img src={DashboardIcon} alt="icon" className="w-2/12 h-fit" />
        )}
        <p className="bg-cyan-300 w-full pl-1">{informationName}</p>
      </div>
      <p className="w-full bg-mauve-400">{value}</p>
    </div>
  );
}
