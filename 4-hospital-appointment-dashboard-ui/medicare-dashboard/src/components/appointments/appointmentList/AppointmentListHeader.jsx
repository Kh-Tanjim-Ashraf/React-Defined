export default function AppointmentListHeader({ totalAppointments }) {
  return (
    <div className="appointment-list-header">
      <h3 className="card-title">Appointments</h3>
      <p className="count-pill">{totalAppointments}</p>
    </div>
  );
}
