import Badge from "../../ui/Badge";

export default function DoctorCardInformation({ availability }) {
  return (
    <div className="doctor-card-information">
      <p className="doctor-name">Dr. Ayesha Rahman</p>
      <div className="meta-info-and-availability-badge-container">
        <p className="doctor-meta-info">Cardiology • MBBS, FCPS (Cardiology)</p>
        {availability === false && (
          <Badge badgeName="Not available" className="not-available-badge" />
        )}
      </div>
      <div className="consultation-fees-container">
        <p className="consultation-fees">Fee ৳ 1,200</p>
      </div>
    </div>
  );
}
