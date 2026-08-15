import Button from "../../../../../../components/ui/Button";

export default function SectionFooter() {
  return (
    <>
      <div className="pagination">
        <Button type="button" className="previousPage" buttonName="Prev" />
        <Button type="button" className="pageNumber" buttonName="1" />
        <Button type="button" className="pageNumber" buttonName="2" />
        <Button type="button" className="pageNumber" buttonName="3" />
        <Button type="button" className="pageNumber" buttonName="4" />
        <Button type="button" className="pageCollapsed" buttonName="..." />
        <Button type="button" className="pageNumber" buttonName="42" />
        <Button type="button" className="nextPage" buttonName="Next" />
      </div>
      <div className="metaInfo">
        Hovering "Next" prefetches page 3 into the cache
      </div>
    </>
  );
}
