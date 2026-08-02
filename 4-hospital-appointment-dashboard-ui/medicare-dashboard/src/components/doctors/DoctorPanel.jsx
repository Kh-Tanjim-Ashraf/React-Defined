import DoctorFilter from "./DoctorFilter";
import DoctorList from "./DoctorList";
import DoctorPanelHeader from "./doctorPanel/DoctorPanelHeader";

export default function DoctorPanel({ doctors }) {
  return (
    <div className="doctor-panel">
      <DoctorPanelHeader doctors={doctors} />
      <DoctorFilter doctors={doctors} />
      <DoctorList />
    </div>
  );
}
