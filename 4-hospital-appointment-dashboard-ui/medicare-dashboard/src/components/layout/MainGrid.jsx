import DoctorPanel from "../doctors/DoctorPanel";
import AppointmentForm from "../appointments/AppointmentForm";
import AppointmentList from "../appointments/AppointmentList";

export default function MainGrid() {
  return (
    <div className="main-grid">
      {/* Doctor List, Search & Filter Container */}
      <div className="main-grid-left-container">
        <DoctorPanel />
      </div>
      {/* Appointment Form & List Container */}
      <div className="main-grid-right-container">
        <AppointmentForm />
        <AppointmentList />
      </div>
    </div>
  );
}
