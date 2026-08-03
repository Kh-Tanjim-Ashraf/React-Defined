import { useRef, useState } from "react";
import DoctorFilter from "./DoctorFilter";
import DoctorList from "./DoctorList";
import DoctorPanelHeader from "./doctorPanel/DoctorPanelHeader";

export default function DoctorPanel({ doctors }) {
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);
  const departmentFilterContainerRef = useRef(null);

  const handleFilterDoctorsByDepartment = (event) => {
    const departmentFilterContainerElem = departmentFilterContainerRef.current;

    // Un-select any previously selected department chip
    departmentFilterContainerElem.childNodes.forEach((dptChip) => {
      if (dptChip.className === "department-filter-chip-selected") {
        dptChip.className = "department-filter-chip";
      }
    });

    // Select the currently clicked department chip
    event.target.className = "department-filter-chip-selected";

    // Render all the doctors if the filter-query="All", otherwise filter by department
    if (event.target.innerText === "All") {
      setFilteredDoctors(doctors);
    } else {
      setFilteredDoctors(
        doctors.filter(
          (doctor) => doctor.department === event.target.innerText,
        ),
      );
    }
  };

  return (
    <div className="doctor-panel">
      <DoctorPanelHeader doctors={doctors} />
      <DoctorFilter
        onClick={handleFilterDoctorsByDepartment}
        ref={departmentFilterContainerRef}
      />
      <DoctorList doctors={filteredDoctors} />
    </div>
  );
}
