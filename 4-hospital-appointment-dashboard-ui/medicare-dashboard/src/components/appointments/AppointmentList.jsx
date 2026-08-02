import AppointmentListHeader from "./appointmentList/AppointmentListHeader";
import AppointmentStatusFilter from "./appointmentList/AppointmentStatusFilter";
import AppointmentRow from "./AppointmentRow";

export default function AppointmentList() {
  return (
    <div className="appointment-list">
      <AppointmentListHeader />
      <AppointmentStatusFilter />
      <AppointmentRow />
    </div>
  );
}
