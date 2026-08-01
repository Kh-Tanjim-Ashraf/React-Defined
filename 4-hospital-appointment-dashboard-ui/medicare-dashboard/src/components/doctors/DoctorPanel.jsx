import DoctorFilter from "./DoctorFilter";
import DoctorList from "./DoctorList";

export default function DoctorPanel() {
  return (
    <div className="doctor-panel">
      <div className="doctor-panel-header">
        <h3 className="card-title">Our Doctors</h3>
        <p className="count-pill">8</p>
      </div>

      <DoctorFilter />
      <DoctorList />
    </div>
  );
}
