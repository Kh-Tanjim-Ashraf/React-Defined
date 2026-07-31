import MediCareLogo from "../../assets/MediCare-Clinic-Logo.png";
import Button from "../ui/Button";

export default function Header() {
  return (
    <header>
      <div className="header-container-wrapper">
        <div className="header-brand">
          <img
            src={MediCareLogo}
            alt="MediCare-Logo"
            className="header-brand-logo"
          />
          <h1 className="header-brand-name">MediCare Clinic</h1>
        </div>
        <div className="header-center">
          <p className="header-center-content">Front Desk Dashboard</p>
        </div>
        <div className="header-action">
          <Button buttonName="Crash Test" className="crash-test-button" />
        </div>
      </div>
    </header>
  );
}
