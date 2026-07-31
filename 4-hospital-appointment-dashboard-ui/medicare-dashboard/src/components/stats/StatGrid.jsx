import StatCard from "./StatCard";
import StethoscopeLogo from "../../assets/stethoscope.png";
import CalendarLogo from "../../assets/calendar.png";
import HourglassLogo from "../../assets/hourglass.png";
import CheckmarkLogo from "../../assets/check-mark.png";
import { useState } from "react";
import Doctors from "../../data/doctors";
import Appointments from "../../data/appointments";

export default function StatGrid() {
  const [doctors, setDoctors] = useState(Doctors);
  const [appointments, setAppointments] = useState(Appointments);

  const pendingAppointments = appointments.filter(
    (appointment) => appointment.status == "Pending",
  );

  const completedAppointments = appointments.filter(
    (appointment) => appointment.status === "Completed",
  );

  return (
    <div className="stat-grid">
      <StatCard
        cardIcon={StethoscopeLogo}
        labelContent="Total Doctors"
        cardValue={doctors.length}
      />
      <StatCard
        cardIcon={CalendarLogo}
        labelContent="Total Appointments"
        cardValue={appointments.length}
      />
      <StatCard
        cardIcon={HourglassLogo}
        labelContent="Pending Appointments"
        cardValue={pendingAppointments.length}
      />
      <StatCard
        cardIcon={CheckmarkLogo}
        labelContent="Completed Appointments"
        cardValue={completedAppointments.length}
      />
    </div>
  );
}
