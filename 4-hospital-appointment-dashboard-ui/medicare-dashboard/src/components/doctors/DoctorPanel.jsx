import { useRef } from "react";
import DoctorFilter from "./DoctorFilter";
import DoctorList from "./DoctorList";
import DoctorPanelHeader from "./doctorPanel/DoctorPanelHeader";

export default function DoctorPanel({ doctors }) {
  const departmentFilterContainerRef = useRef(null);

  const handleFilterDoctorsByDepartment = (event) => {
    const departmentFilterContainerElem = departmentFilterContainerRef.current;

    departmentFilterContainerElem.childNodes.forEach((dptChip) => {
      if (dptChip.className === "department-filter-chip-selected") {
        dptChip.className = "department-filter-chip";
      }
    });

    event.target.className = "department-filter-chip-selected";

    // console.log(event.target.innerText);

    console.log(
      doctors.filter((doctor) => doctor.department === event.target.innerText),
    );
  };

  return (
    <div className="doctor-panel">
      <DoctorPanelHeader doctors={doctors} />
      <DoctorFilter
        doctors={doctors}
        onClick={handleFilterDoctorsByDepartment}
        ref={departmentFilterContainerRef}
      />
      <DoctorList doctors={doctors} />
    </div>
  );
}
