import Card from "../ui/Card";

export default function StatCard({ cardIcon, labelContent, cardValue }) {
  return (
    <Card className="stat-grid-card">
      <img
        src={cardIcon}
        alt={`${labelContent} Logo`}
        className="stat-grid-card-icon"
      />
      <p className="stat-grid-card-label">{labelContent}</p>
      <h2 className="stat-grid-card-value">{cardValue}</h2>
    </Card>
  );
}
