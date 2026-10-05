import DeveloperInfo from "./DeveloperInfo";
import SocialHandles from "./SocialHandles";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <div className="flex items-center min-h-28 px-5 bg-white border-t-0.5 border-slate-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-2px_rgba(0,0,0,0.1)]">
      {/* Developer Info & Social Handles */}
      <div className="grow flex items-center">
        {/* Developer Info */}
        <DeveloperInfo />
        {/* Social Handles */}
        <SocialHandles />
      </div>
      {/* Brand Logo */}
      <BrandLogo />
    </div>
  );
}
