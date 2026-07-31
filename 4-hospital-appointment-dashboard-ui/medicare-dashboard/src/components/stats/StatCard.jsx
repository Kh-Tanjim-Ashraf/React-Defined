import Card from "../ui/Card";
import MediCareLogo from "../../assets/MediCare-Clinic-Logo.png";

export default function StatCard({ cardIcon, labelContent, cardValue }) {
  return (
    <Card className="stat-grid-card">
      <img src={cardIcon} alt="MediCare-logo" className="stat-grid-card-icon" />
      <p className="stat-grid-card-label">{labelContent}</p>
      <h2 className="stat-grid-card-value">{cardValue}</h2>
    </Card>
  );
}
