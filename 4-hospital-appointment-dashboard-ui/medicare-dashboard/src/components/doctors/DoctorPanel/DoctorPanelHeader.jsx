export default function DoctorPanelHeader({ doctors }) {
  return (
    <div className="doctor-panel-header">
      <h3 className="card-title">Our Doctors</h3>
      <p className="count-pill">{doctors.length}</p>
    </div>
  );
}
