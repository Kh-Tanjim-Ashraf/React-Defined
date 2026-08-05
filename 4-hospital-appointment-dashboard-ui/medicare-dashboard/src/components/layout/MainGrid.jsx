import DoctorPanel from "../doctors/DoctorPanel";
import AppointmentForm from "../appointments/AppointmentForm";
import AppointmentList from "../appointments/AppointmentList";
import { useState } from "react";

export default function MainGrid({ doctors, appointments, setAppointments }) {
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const handleSelectDoctor = (doctorId) => {
    const doctor = doctors.find((doctor) => doctor.id === doctorId);
    setSelectedDoctor(doctor.name);
  };

  const handleAppointmentStatus = (appointmentId, newAppointmentStatus) => {
    const index = appointments.findIndex(
      (appointment) => appointment.id === appointmentId,
    );
    const appointmentsCopy = [...appointments];
    appointmentsCopy[index].status = newAppointmentStatus;
    setAppointments(appointmentsCopy);
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
          handleAppointmentStatus={handleAppointmentStatus}
        />
      </div>
    </div>
  );
}
