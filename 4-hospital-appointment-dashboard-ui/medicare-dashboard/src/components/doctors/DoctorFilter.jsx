import { useState } from "react";
import Departments from "../../data/departments";
import DoctorSearch from "./doctorFilter/DoctorSearch";
import DepartmentFilter from "./doctorFilter/DepartmentFilter";

export default function DoctorFilter({ onClick, ref }) {
  const [inputValue, setInputValue] = useState("");
  const [departments, setDepartments] = useState(Departments);

  return (
    <div className="doctor-list-filter-container">
      <DoctorSearch inputValue={inputValue} setInputValue={setInputValue} />
      <DepartmentFilter departments={departments} onClick={onClick} ref={ref} />
    </div>
  );
}
