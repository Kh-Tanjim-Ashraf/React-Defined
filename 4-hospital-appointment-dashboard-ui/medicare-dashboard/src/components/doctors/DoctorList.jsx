import DoctorCard from "./DoctorCard";

export default function DoctorList({ doctors, handleSelectDoctor }) {
  return (
    <div className="doctor-list-container">
      <DoctorCard doctors={doctors} handleSelectDoctor={handleSelectDoctor} />
    </div>
  );
}
