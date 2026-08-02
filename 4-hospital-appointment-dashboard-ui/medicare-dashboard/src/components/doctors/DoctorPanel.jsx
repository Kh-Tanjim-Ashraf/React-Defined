import DoctorFilter from "./DoctorFilter";
import DoctorList from "./DoctorList";
import DoctorPanelHeader from "./doctorPanel/DoctorPanelHeader";

export default function DoctorPanel() {
  return (
    <div className="doctor-panel">
      <DoctorPanelHeader />
      <DoctorFilter />
      <DoctorList />
    </div>
  );
}
