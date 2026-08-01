import MediCareLogo from "../../../assets/MediCare-Clinic-Logo.png";

export default function HeaderBrand() {
  return (
    <div className="header-brand">
      <img
        src={MediCareLogo}
        alt="MediCare-Logo"
        className="header-brand-logo"
      />
      <h1 className="header-brand-name">MediCare Clinic</h1>
    </div>
  );
}
