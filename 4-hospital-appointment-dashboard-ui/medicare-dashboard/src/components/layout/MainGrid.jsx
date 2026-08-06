import DoctorPanel from "../doctors/DoctorPanel";
import AppointmentForm from "../appointments/AppointmentForm";
import AppointmentList from "../appointments/AppointmentList";
import { useRef, useState } from "react";

export default function MainGrid({ doctors, appointments, setAppointments }) {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const doctorListCardWrapperRef = useRef(null);

  // Handler Function: Click the `Select` button in a card from the doctor's list, which makes a side effect of auto selecting the 'Doctor' in the appointment form
  const handleSelectDoctor = (doctorId, event) => {
    const doctor = doctors.find((doctor) => doctor.id === doctorId);

    // Un-select previously selected doctor card
    const doctorListCardWrapperElem = doctorListCardWrapperRef.current;
    doctorListCardWrapperElem.childNodes.forEach((dlCard) => {
      if (dlCard.className === "doctor-card-selected") {
        dlCard.className = "doctor-card";
        // dlCard.button.innerText = "Select";
        dlCard.childNodes.forEach((dlcChild) => {
          if (dlcChild.tagName === "BUTTON") {
            dlcChild.className = "doctor-card-select-button";
            dlcChild.innerText = "Select";
          }
        });
      }
    });

    // Updated the styling of the selected doctor card
    event.target.innerText = "Selected";
    event.target.className = "doctor-card-select-button-selected";
    event.target.parentElement.className = "doctor-card-selected";

    // Update the state variable of `selectedDoctor`
    setSelectedDoctor(doctor.name);
  };

  return (
    <div className="main-grid">
      {/* Doctor List, Search & Filter Container */}
      <div className="main-grid-left-container">
        <DoctorPanel
          doctors={doctors}
          handleSelectDoctor={handleSelectDoctor}
          doctorListCardWrapperRef={doctorListCardWrapperRef}
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
