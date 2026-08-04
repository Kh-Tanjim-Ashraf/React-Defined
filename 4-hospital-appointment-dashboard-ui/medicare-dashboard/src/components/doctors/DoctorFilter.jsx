import { useState } from "react";
import Departments from "../../data/departments";
import DoctorSearch from "./doctorFilter/DoctorSearch";
import DepartmentFilter from "./doctorFilter/DepartmentFilter";

export default function DoctorFilter({
  searchInputValue,
  setSearchInputValue,
  ref,
  onClick,
}) {
  const [departments, setDepartments] = useState(Departments);

  return (
    <div className="doctor-list-filter-container">
      <DoctorSearch
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
      />
      <DepartmentFilter departments={departments} ref={ref} onClick={onClick} />
    </div>
  );
}
