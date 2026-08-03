import Chip from "../../ui/chip";

export default function DepartmentFilter({ departments, onClick, ref }) {
  return (
    <div className="department-filter-container" ref={ref}>
      <Chip className="department-filter-chip-selected" onClick={onClick}>
        All
      </Chip>
      {departments.map((department) => (
        <Chip
          key={department.id}
          className="department-filter-chip"
          onClick={onClick}
        >
          {department.departmentName}
        </Chip>
      ))}
    </div>
  );
}
