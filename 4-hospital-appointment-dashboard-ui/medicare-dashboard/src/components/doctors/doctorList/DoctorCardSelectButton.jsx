import Button from "../../ui/Button";

export default function DoctorCardSelectButton({
  buttonName,
  className,
  onClick,
}) {
  return (
    <>
      <Button buttonName={buttonName} className={className} onClick={onClick} />
    </>
  );
}
