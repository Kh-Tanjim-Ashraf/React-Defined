import AppointmentListHeader from "./appointmentList/AppointmentListHeader";
import AppointmentStatusFilter from "./appointmentList/AppointmentStatusFilter";
import AppointmentRow from "./AppointmentRow";

export default function AppointmentList({
  doctors,
  appointments,
  handleAppointmentStatus,
}) {
  return (
    <div className="appointment-list">
      <AppointmentListHeader />
      <AppointmentStatusFilter appointments={appointments} />
      <AppointmentRow
        doctors={doctors}
        appointments={appointments}
        handleAppointmentStatus={handleAppointmentStatus}
      />
    </div>
  );
}
