import DoctorCard from "./DoctorCard";

export default function DoctorList({
  doctors,
  handleSelectDoctor,
  doctorListCardWrapperRef,
}) {
  return (
    <div className="doctor-list-container">
      <DoctorCard
        doctors={doctors}
        handleSelectDoctor={handleSelectDoctor}
        doctorListCardWrapperRef={doctorListCardWrapperRef}
      />
    </div>
  );
}
