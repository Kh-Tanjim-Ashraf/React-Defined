import Card from "../ui/Card";
import DoctorCardAvatar from "./doctorList/DoctorCardAvatar";
import DoctorCardInformation from "./doctorList/DoctorCardInformation";
import DoctorCardSelectButton from "./doctorList/DoctorCardSelectButton";

export default function DoctorCard({ doctors }) {
  return (
    <div className="doctor-list-card-wrapper">
      {/* Static Repeated Card */}
      {doctors.map((doctor) => (
        <Card key={doctor.id} className="doctor-card">
          <DoctorCardAvatar />
          <DoctorCardInformation doctor={doctor} />
          <DoctorCardSelectButton
            buttonName="Select"
            className="doctor-card-select-button"
          />
        </Card>
      ))}
    </div>
  );
}
