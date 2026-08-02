import Card from "../ui/Card";
import DoctorCardAvatar from "./doctorList/DoctorCardAvatar";
import DoctorCardInformation from "./doctorList/DoctorCardInformation";
import DoctorCardSelectButton from "./doctorList/DoctorCardSelectButton";

export default function DoctorCard() {
  const availability = true;

  return (
    <div className="doctor-list-card-wrapper">
      {/* Static Repeated Card */}
      <Card className="doctor-card">
        <DoctorCardAvatar />
        <DoctorCardInformation availability={availability} />
        <DoctorCardSelectButton
          buttonName="Selected"
          className="doctor-card-select-button-selected"
        />
      </Card>
      <Card className="doctor-card">
        <DoctorCardAvatar />
        <DoctorCardInformation availability={availability} />
        <DoctorCardSelectButton
          buttonName="Select"
          className="doctor-card-select-button"
        />
      </Card>
      <Card className="doctor-card">
        <DoctorCardAvatar />
        <DoctorCardInformation availability={availability} />
        <DoctorCardSelectButton
          buttonName="Select"
          className="doctor-card-select-button"
        />
      </Card>
      <Card className="doctor-card">
        <DoctorCardAvatar />
        <DoctorCardInformation availability={false} />
        <DoctorCardSelectButton
          buttonName="Select"
          className="doctor-card-select-button"
        />
      </Card>
      <Card className="doctor-card">
        <DoctorCardAvatar />
        <DoctorCardInformation availability={availability} />
        <DoctorCardSelectButton
          buttonName="Select"
          className="doctor-card-select-button"
        />
      </Card>
      <Card className="doctor-card">
        <DoctorCardAvatar />
        <DoctorCardInformation availability={availability} />
        <DoctorCardSelectButton
          buttonName="Select"
          className="doctor-card-select-button"
        />
      </Card>
    </div>
  );
}
