import Badge from "../../ui/Badge";

export default function DoctorCardInformation({ doctor }) {
  return (
    <div className="doctor-card-information">
      <p className="doctor-name">{doctor.name}</p>
      <div className="meta-info-and-availability-badge-container">
        <p className="doctor-meta-info">
          {doctor.department} • {doctor.specialization}
        </p>
        {doctor.available === false && (
          <Badge badgeName="Not available" className="not-available-badge" />
        )}
      </div>
      <div className="consultation-fees-container">
        <p className="consultation-fees">Fee ৳ {doctor.visitingFee}</p>
      </div>
    </div>
  );
}
