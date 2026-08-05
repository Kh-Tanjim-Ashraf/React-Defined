import DoctorPanel from "../doctors/DoctorPanel";
import AppointmentForm from "../appointments/AppointmentForm";
import AppointmentList from "../appointments/AppointmentList";
import { useState } from "react";

export default function MainGrid({ doctors, appointments }) {
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const handleSelectDoctor = (doctorId) => {
    const doctor = doctors.filter((doctor) => doctor.id === doctorId)[0];
    setSelectedDoctor(doctor.name);
  };

  return (
    <div className="main-grid">
      {/* Doctor List, Search & Filter Container */}
      <div className="main-grid-left-container">
        <DoctorPanel
          doctors={doctors}
          handleSelectDoctor={handleSelectDoctor}
        />
      </div>
      {/* Appointment Form & List Container */}
      <div className="main-grid-right-container">
        <AppointmentForm
          doctors={doctors}
          selectedDoctor={selectedDoctor}
          setSelectedDoctor={setSelectedDoctor}
        />
        <AppointmentList />
      </div>
    </div>
  );
}
