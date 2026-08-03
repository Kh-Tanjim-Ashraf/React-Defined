import DoctorCard from "./DoctorCard";

export default function DoctorList({ doctors }) {
  return (
    <div className="doctor-list-container">
      <DoctorCard doctors={doctors} />
    </div>
  );
}
