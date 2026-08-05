import Chip from "../../ui/chip";

export default function AppointmentStatusFilter({ appointments }) {
  const pendingAppointments = appointments.filter(
    (appointment) => appointment.status === "Pending",
  );
  const confirmedAppointments = appointments.filter(
    (appointment) => appointment.status === "Confirmed",
  );
  const completedAppointments = appointments.filter(
    (appointment) => appointment.status === "Completed",
  );
  const cancelledAppointments = appointments.filter(
    (appointment) => appointment.status === "Cancelled",
  );

  const appointmentStatuses = [
    { status: "All", id: 1 },
    { status: "Pending", count: pendingAppointments.length, id: 2 },
    { status: "Confirmed", count: confirmedAppointments.length, id: 3 },
    { status: "Completed", count: completedAppointments.length, id: 4 },
    { status: "Cancelled", count: cancelledAppointments.length, id: 5 },
  ];

  return (
    <div className="appointment-status-filter-container">
      {appointmentStatuses.map((apts) => (
        <Chip key={apts.id} className="appointment-filter-chip">
          {apts.status} {apts?.count !== undefined && `(${apts.count})`}
        </Chip>
      ))}
    </div>
  );
}
