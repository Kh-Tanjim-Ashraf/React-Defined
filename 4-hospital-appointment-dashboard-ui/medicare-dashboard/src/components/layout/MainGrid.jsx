import DoctorPanel from "../doctors/DoctorPanel";
import AppointmentForm from "../appointments/AppointmentForm";
import AppointmentList from "../appointments/AppointmentList";
import { useRef, useState } from "react";

export default function MainGrid({ doctors, appointments, setAppointments }) {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const initialFormState = {
    patientName: "",
    phoneNumber: "",
    appointmentDate: "",
    appointmentTime: "",
    note: "",
  };
  const [formData, setFormData] = useState(initialFormState);
  const doctorListCardWrapperRef = useRef(null);

  // Handler Function: Click the `Select` button in a card from the doctor's list, which makes a side effect of auto selecting the 'Doctor' in the appointment form
  const handleSelectDoctor = (doctorId, event) => {
    const doctor = doctors.find((doctor) => doctor.id === doctorId);

    // Un-select previously selected doctor card, including the selected button inside the card
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

    // Updated the styling of the currently selected doctor card
    event.target.innerText = "Selected";
    event.target.className = "doctor-card-select-button-selected";
    event.target.parentElement.className = "doctor-card-selected";

    // Update the state variable of `selectedDoctor`
    setSelectedDoctor(doctor.id);
  };

  // Handler Function: Update state dynamically as the user types
  const handleChangeAppointmentFormInput = (event) => {
    const { name, value } = event.target;

    // `[name]` is the "Computed Property Name" which dynamically sets the key of state variable's object based on user's typing on appointment's input field
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitAppointmentForm = (event) => {
    event.preventDefault();

    const { patientName, phoneNumber, appointmentDate, appointmentTime, note } =
      formData;

    // Determine the next appointment index from the last one
    const nextAppointmentIndex = appointments.at(-1).id + 1;

    const newAppointment = {
      id: nextAppointmentIndex,
      patientName: patientName,
      phone: phoneNumber,
      doctorId: selectedDoctor,
      date: appointmentDate,
      time: appointmentTime,
      status: "Pending",
      note: note,
    };

    // Add a new appointment into the array
    setAppointments([...appointments, newAppointment]);

    // Reset the form's input fields
    setFormData(initialFormState);

    // Reset the selected-doctor-card & state
    setSelectedDoctor("");

    const doctorListCardWrapperElem = doctorListCardWrapperRef.current;

    // Un-select previously selected doctor card, including the selected button inside the card
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
          formData={formData}
          handleChangeAppointmentFormInput={handleChangeAppointmentFormInput}
          handleSubmitAppointmentForm={handleSubmitAppointmentForm}
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
