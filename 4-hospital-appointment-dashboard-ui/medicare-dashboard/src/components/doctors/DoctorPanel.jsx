import { useRef, useState } from "react";
import DoctorFilter from "./DoctorFilter";
import DoctorList from "./DoctorList";
import DoctorPanelHeader from "./doctorPanel/DoctorPanelHeader";

export default function DoctorPanel({
  doctors,
  handleSelectDoctor,
  doctorListCardWrapperRef,
}) {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [searchInputValue, setSearchInputValue] = useState(""); // React State: Search Input Field
  const departmentFilterContainerRef = useRef(null);

  // Handler Function: Visually change the styling of department-filter chips & update the value of state variable `selectedDepartment`
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

    // Change the value of `selectedDepartment` state variable based on the `innerText` of the selected-department-chip
    setSelectedDepartment(event.target.innerText);
  };

  const query = searchInputValue.trim().toLowerCase();

  // Filter doctors by department/search-query based on the `selectedDepartment` state variable before every render of this component
  /*
    NOTE: The doctors will always be filtered whenever this component gets rendered (even if in the first page load).
    
    SCENE-1: Nothing is typed in the search input, nor any department is selected. The `selectedDepartment` state will always be evaluated as `true` bacause of the default state value & JS won't execute the next `||` part for `matchesDepartment`. The `matchesSearch` will also be evaluated as `true` since `.includes()` will always return `true` on empty string in this scenario. Thus every doctors from the array will be returned by the `.filter()` function since `matchesDepartment=true` & `matchesSearch=true`.

    SCENE-2: A department is selected but nothing is typed in the search input. The `selectedDepartment==="All"` will be evaluated as `false` & JS will try to evaluate the current doctor's deparment with the selected department. Then the `matchesDepartment` will store the boolean value as `true/false` accordingly. Lastly `.includes()` will return `true` on empty string for the doctor's name, thus `matchesSearch` will store `true` always in this case. The `matchesDepartment=true/false` & `matchesSearch=true`.

    SCENE-3: A doctor's name is typed in the search input but no department is selected. The `selectedDepartment==="All"` will be evaluated as `true` & store this boolean value into the `matchesDepartment` variable. The doctor name will try to match with the query, if found then it'll return `true` & `matchesSearch` will store `true`, otherwise `false`. Thus `matchesDepartment=true` & `matchesSearch=true/false`.

    SCENE-4: A doctor's name is typed in the search input, also a department is selected. The `selectedDepartment==="All"` will be evaluated as `false` & JS will evaluate the current doc's department with the `selectedDepartment` & store the boolean value accordingly into `matchesDepartment` variable. Lastly JS will evaluate if the query value exists in current doc's name using the `.includes()` method, returns boolean value accordingly & stores that into `matchesSearch` variable. Thus `matchesDepartment=true/false` & `matchesSearch=true/false`.

    FINALLY, only those doctors will be returned through the `.filter()` method, who paas the criteria of `matchesDepartment=true` & `matchesSearch=true` & will be showed in the list accordingly.
  */
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
      <DoctorList
        doctors={filteredDoctors}
        handleSelectDoctor={handleSelectDoctor}
        doctorListCardWrapperRef={doctorListCardWrapperRef}
      />
    </div>
  );
}
