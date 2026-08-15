import Badge from "../../../../../../components/ui/Badge";

export default function SectionHeader() {
  return (
    <>
      <div className="headerTextContainer">
        <h3>Results</h3>
        <Badge badgeName="background refetching" />
      </div>
      <div className="prefetchAction">Prefetch next page▸</div>
    </>
  );
}
