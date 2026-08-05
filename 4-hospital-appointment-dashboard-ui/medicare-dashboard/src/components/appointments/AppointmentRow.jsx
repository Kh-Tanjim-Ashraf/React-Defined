import SingleAppointmentRow from "./AppointmentRow/SingleAppointmentRow";

export default function AppointmentRow({ doctors, appointments }) {
  const doctorById = Object.fromEntries(
    doctors.map((doctor) => [doctor.id, doctor]),
  );

  return (
    <div className="appointment-table-container">
      <table className="appointment-table">
        <thead>
          <tr className="table-header-row">
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date & Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample Data */}
          {appointments.map((appointment) => (
            <SingleAppointmentRow
              key={appointment.id}
              doctorName={doctorById[appointment.doctorId].name}
              doctorDepartment={doctorById[appointment.doctorId].department}
              appointment={appointment}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
