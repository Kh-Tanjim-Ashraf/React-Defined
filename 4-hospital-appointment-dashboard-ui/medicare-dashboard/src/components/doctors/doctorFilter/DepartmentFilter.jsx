import Chip from "../../ui/chip";

export default function DepartmentFilter({ departments }) {
  return (
    <div className="department-filter-container">
      <Chip className="department-filter-chip">All</Chip>
      {departments.map((department) => (
        <Chip key={department.id} className="department-filter-chip">
          {department.departmentName}
        </Chip>
      ))}
    </div>
  );
}
