import StatCard from "./StatCard";
import StethoscopeLogo from "../../assets/stethoscope.png";
import CalendarLogo from "../../assets/calendar.png";
import HourglassLogo from "../../assets/hourglass.png";
import CheckmarkLogo from "../../assets/check-mark.png";

export default function StatGrid() {
  return (
    <div className="stat-grid">
      <StatCard
        cardIcon={StethoscopeLogo}
        labelContent="Total Doctors"
        cardValue={10}
      />
      <StatCard
        cardIcon={CalendarLogo}
        labelContent="Total Appointments"
        cardValue={10}
      />
      <StatCard
        cardIcon={HourglassLogo}
        labelContent="Pending Appointments"
        cardValue={10}
      />
      <StatCard
        cardIcon={CheckmarkLogo}
        labelContent="Completed Appointments"
        cardValue={10}
      />
    </div>
  );
}
