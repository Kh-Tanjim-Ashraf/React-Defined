import Chip from "../../ui/chip";

export default function AppointmentStatusFilter() {
  const appointmentStatuses = [
    { status: "All", id: 1 },
    { status: "Pending", count: 5, id: 2 },
    { status: "Confirmed", count: 2, id: 3 },
    { status: "Completed", count: 4, id: 4 },
    { status: "Cancelled", count: 1, id: 5 },
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
