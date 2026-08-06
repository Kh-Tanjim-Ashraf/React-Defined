import DoctorPanel from "../doctors/DoctorPanel";
import AppointmentForm from "../appointments/AppointmentForm";
import AppointmentList from "../appointments/AppointmentList";
import { useState } from "react";

export default function MainGrid({ doctors, appointments, setAppointments }) {
  const [selectedDoctor, setSelectedDoctor] = useState("");

  // Handler Function: Click the `Select` button in a card from the doctor's list, which makes a side effect of auto selecting the 'Doctor' in the appointment form
  const handleSelectDoctor = (doctorId) => {
    const doctor = doctors.find((doctor) => doctor.id === doctorId);
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
        <AppointmentList
          doctors={doctors}
          appointments={appointments}
          setAppointments={setAppointments}
        />
      </div>
    </div>
  );
}
