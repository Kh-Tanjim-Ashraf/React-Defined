import { useState } from "react";
import Departments from "../../data/departments";
import DoctorSearch from "./doctorFilter/DoctorSearch";
import DepartmentFilter from "./doctorFilter/DepartmentFilter";

export default function DoctorFilter() {
  const [inputValue, setInputValue] = useState("");
  const [departments, setDepartments] = useState(Departments);

  return (
    <div className="doctor-filter-container">
      <DoctorSearch inputValue={inputValue} setInputValue={setInputValue} />
      <DepartmentFilter departments={departments} />
    </div>
  );
}
