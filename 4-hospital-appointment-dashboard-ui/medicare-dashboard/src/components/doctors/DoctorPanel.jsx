import { useRef, useState } from "react";
import DoctorFilter from "./DoctorFilter";
import DoctorList from "./DoctorList";
import DoctorPanelHeader from "./doctorPanel/DoctorPanelHeader";

export default function DoctorPanel({ doctors }) {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [searchInputValue, setSearchInputValue] = useState(""); // React State: Search Input Field
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

    // Change the value of selectedDepartment state
    setSelectedDepartment(event.target.innerText);
  };

  const query = searchInputValue.trim().toLowerCase();

  // Filter doctors by department/search-query
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesDepartment =
      selectedDepartment === "All" || doctor.department === selectedDepartment;

    const matchesSearch = doctor.name.toLowerCase().includes(query);

    return matchesDepartment && matchesSearch;
  });

  return (
    <div className="doctor-panel">
      <DoctorPanelHeader doctors={doctors} />
      <DoctorFilter
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
        ref={departmentFilterContainerRef}
        onClick={handleFilterDoctorsByDepartment}
      />
      <DoctorList doctors={filteredDoctors} />
    </div>
  );
}
