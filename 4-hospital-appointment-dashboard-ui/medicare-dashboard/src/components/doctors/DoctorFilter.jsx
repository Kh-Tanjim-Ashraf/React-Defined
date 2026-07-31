import Chip from "../ui/chip";
import SearchIcon from "../../assets/search.png";
import { useState } from "react";
import Departments from "../../data/departments";

export default function DoctorFilter() {
  const [inputValue, setInputValue] = useState("");
  const [departments, setDepartments] = useState(Departments);

  return (
    <div className="doctor-filter-container">
      <div className="doctor-search-wrapper">
        {inputValue === "" && (
          <div className="search-icon-container">
            <img
              src={SearchIcon}
              alt="search-icon"
              className="doctor-search-icon"
            />
          </div>
        )}
        <input
          type="text"
          className="doctor-search-input"
          name="doctor-search-input"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Search doctor by name..."
        />
      </div>
      <div className="department-filter-container">
        <Chip className="department-filter-chip" chipName="All" />
        {departments.map((department) => (
          <Chip
            key={department.id}
            className="department-filter-chip"
            chipName={department.departmentName}
          />
        ))}
      </div>
    </div>
  );
}
