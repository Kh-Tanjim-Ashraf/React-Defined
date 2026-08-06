import { useRef, useState } from "react";
import AppointmentListHeader from "./appointmentList/AppointmentListHeader";
import AppointmentStatusFilter from "./appointmentList/AppointmentStatusFilter";
import AppointmentRow from "./AppointmentRow";

export default function AppointmentList({
  doctors,
  appointments,
  setAppointments,
}) {
  const [selectedAppointmentStatus, setSelectedAppointmentStatus] =
    useState("All");
  const appointmentStatusFilterContainerRef = useRef(null);

  const totalAppointments = appointments.length;

  // Handler Function: Change the status of an appointment based on it's id from the array of objects
  const handleAppointmentStatus = (appointmentId, newAppointmentStatus) => {
    const index = appointments.findIndex(
      (appointment) => appointment.id === appointmentId,
    );
    const appointmentsCopy = [...appointments];
    appointmentsCopy[index].status = newAppointmentStatus;
    setAppointments(appointmentsCopy);
  };

  // Handler Function: Visually change the styling of appointment-status-filter chips & update the value of state variable `selectedAppointmentStatus`
  const handleFilteredAppointmentsByStatus = (event) => {
    const appointmentStatusFilterContainerElem =
      appointmentStatusFilterContainerRef.current;

    // Un-select any previously selected chip
    appointmentStatusFilterContainerElem.childNodes.forEach((aptStatChip) => {
      if (aptStatChip.className === "chip appointment-filter-chip-selected") {
        aptStatChip.className = "chip appointment-filter-chip";
      }
    });

    // Select the currently clicked appointment-status chip
    event.target.className = "chip appointment-filter-chip-selected";

    // Removed the value of appointments quantity inside the parenthesis from the end of the selected-appointment-status-chip's innerText
    const cleanedEventTargetInnerText = event.target.innerText.split(" ")[0];

    // Update the `selectedAppointmentStatus` state variable based on the `innerText` of the selected-status-chip
    setSelectedAppointmentStatus(cleanedEventTargetInnerText);
  };

  // Filter the appointments array based on `selectedAppointmentStatus` state variable before every render of this component
  const filteredAppointments = appointments.filter((appointment) => {
    const matchesAppointmentStatus =
      selectedAppointmentStatus === "All" ||
      appointment.status === selectedAppointmentStatus;
    return matchesAppointmentStatus;
  });

  return (
    <div className="appointment-list">
      <AppointmentListHeader totalAppointments={totalAppointments} />
      <AppointmentStatusFilter
        appointments={appointments}
        ref={appointmentStatusFilterContainerRef}
        onClick={handleFilteredAppointmentsByStatus}
      />
      <AppointmentRow
        doctors={doctors}
        appointments={filteredAppointments}
        handleAppointmentStatus={handleAppointmentStatus}
      />
    </div>
  );
}
