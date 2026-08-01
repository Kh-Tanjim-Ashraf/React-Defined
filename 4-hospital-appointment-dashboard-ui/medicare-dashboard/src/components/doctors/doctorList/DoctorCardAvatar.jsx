import MediCareLogo from "../../../assets/MediCare-Clinic-Logo.png";

export default function DoctorCardAvatar() {
  return (
    <div className="doctor-card-avatar-wrapper">
      <img
        src={MediCareLogo}
        alt="Doctor Avatar"
        className="doctor-card-avatar"
      />
    </div>
  );
}
