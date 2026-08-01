import DoctorPanel from "../doctors/DoctorPanel";
import AppointmentForm from "../appointments/AppointmentForm";

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
        <div className="appointment-list-container"></div>
      </div>
    </div>
  );
}
