import Chip from "../../ui/chip";

export default function AppointmentStatusFilter({
  appointments,
  ref,
  onClick,
}) {
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
    { status: "Pending", count: pendingAppointments.length, id: 1 },
    { status: "Confirmed", count: confirmedAppointments.length, id: 2 },
    { status: "Completed", count: completedAppointments.length, id: 3 },
    { status: "Cancelled", count: cancelledAppointments.length, id: 4 },
  ];

  return (
    <div
      className="appointment-status-filter-container"
      ref={ref}
      onClick={onClick}
    >
      <Chip className="chip appointment-filter-chip-selected">All</Chip>
      {appointmentStatuses.map((apts) => (
        <Chip key={apts.id} className="chip appointment-filter-chip">
          {apts.status} {apts?.count !== undefined && `(${apts.count})`}
        </Chip>
      ))}
    </div>
  );
}
