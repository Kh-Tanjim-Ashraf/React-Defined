import Card from "../ui/Card";
import DoctorCardAvatar from "./doctorList/DoctorCardAvatar";
import DoctorCardInformation from "./doctorList/DoctorCardInformation";
import DoctorCardSelectButton from "./doctorList/DoctorCardSelectButton";
import SearchIcon from "../../assets/search.png";

export default function DoctorCard({ doctors, handleSelectDoctor }) {
  return (
    <div className="doctor-list-card-wrapper">
      {/* Static Repeated Card */}
      {doctors.length > 0 ? (
        doctors.map((doctor) => (
          <Card key={doctor.id} className="doctor-card">
            <DoctorCardAvatar />
            <DoctorCardInformation doctor={doctor} />
            {doctor.available ? (
              <DoctorCardSelectButton
                buttonName="Select"
                className="doctor-card-select-button"
                onClick={() => handleSelectDoctor(doctor.id)}
              />
            ) : (
              <DoctorCardSelectButton
                buttonName="Select"
                className="doctor-card-select-button-disabled"
              />
            )}
          </Card>
        ))
      ) : (
        <div className="no-doctor-found">
          <img src={SearchIcon} alt="search-cion" />
          <h4>No doctor found!</h4>
          <p>Try a different search or different filter.</p>
        </div>
      )}
    </div>
  );
}
