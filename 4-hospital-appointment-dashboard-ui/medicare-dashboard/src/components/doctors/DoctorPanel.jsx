import DoctorFilter from "./DoctorFilter";

export default function DoctorPanel() {
  return (
    <>
      <div className="doctor-panel-header">
        <h3 className="card-title">Our Doctors</h3>
        <p className="count-pill">8</p>
      </div>

      <DoctorFilter />
    </>
  );
}
