import StatCard from "./StatCard";
import StethoscopeLogo from "../../assets/stethoscope.png";
import CalendarLogo from "../../assets/calendar.png";
import HourglassLogo from "../../assets/hourglass.png";
import CheckmarkLogo from "../../assets/check-mark.png";
import { useState } from "react";

export default function StatGrid({ doctors, appointments }) {
  const pendingAppointments = appointments.filter(
    (appointment) => appointment.status == "Pending",
  );

  const completedAppointments = appointments.filter(
    (appointment) => appointment.status === "Completed",
  );

  const statCards = [
    {
      cardIcon: StethoscopeLogo,
      labelContent: "Total Doctors",
      cardValue: doctors.length,
      id: 1,
    },
    {
      cardIcon: CalendarLogo,
      labelContent: "Total Appointments",
      cardValue: appointments.length,
      id: 2,
    },
    {
      cardIcon: HourglassLogo,
      labelContent: "Pending Appointments",
      cardValue: pendingAppointments.length,
      id: 3,
    },
    {
      cardIcon: CheckmarkLogo,
      labelContent: "Completed Appointments",
      cardValue: completedAppointments.length,
      id: 4,
    },
  ];

  return (
    <div className="stat-grid">
      {statCards.map((statCard) => (
        <StatCard
          key={statCard.id}
          cardIcon={statCard.cardIcon}
          labelContent={statCard.labelContent}
          cardValue={statCard.cardValue}
        />
      ))}
    </div>
  );
}
