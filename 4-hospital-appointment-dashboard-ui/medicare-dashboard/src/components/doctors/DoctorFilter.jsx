import { useRef, useState } from "react";
import Departments from "../../data/departments";
import DoctorSearch from "./doctorFilter/DoctorSearch";
import DepartmentFilter from "./doctorFilter/DepartmentFilter";

export default function DoctorFilter({ doctors }) {
  const [inputValue, setInputValue] = useState("");
  const [departments, setDepartments] = useState(Departments);
  const departmentFilterContainerRef = useRef(null);

  const handleFilterDoctorsByDepartment = (event) => {
    const departmentFilterContainerElem = departmentFilterContainerRef.current;

    departmentFilterContainerElem.childNodes.forEach((dptChip) => {
      if (dptChip.className === "department-filter-chip-selected") {
        dptChip.className = "department-filter-chip";
      }
    });

    event.target.className = "department-filter-chip-selected";
  };

  return (
    <div className="doctor-list-filter-container">
      <DoctorSearch inputValue={inputValue} setInputValue={setInputValue} />
      <DepartmentFilter
        departments={departments}
        onClick={handleFilterDoctorsByDepartment}
        ref={departmentFilterContainerRef}
      />
    </div>
  );
}
