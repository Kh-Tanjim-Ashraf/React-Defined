import SocialHandleButton from "../../../../component/social-handle-button/SocialHandleButton";
import LinkedinLogo from "../../../../assets/LinkedinLogo.png";
import GithubLogo from "../../../../assets/GithubLogo.png";
import HashnodeLogo from "../../../../assets/HashnodeLogo.png";

export default function SocialHandles() {
  return (
    <div className="grow flex justify-center items-center gap-8">
      {/* LinkedIn */}
      <SocialHandleButton
        to="https://www.linkedin.com/in/kh-tanjim-ashraf-68873a381/"
        target="_blank"
        title="Visit my LinkedIn profile"
        src={LinkedinLogo}
        alt="LinkedIn"
        width="36"
        height="36"
        className="p-1 border border-slate-200 rounded-lg hover:border-slate-400 hover:cursor-pointer"
      />
      {/* Github */}
      <SocialHandleButton
        to="https://github.com/Kh-Tanjim-Ashraf"
        target="_blank"
        title="Visit my GitHub profile"
        src={GithubLogo}
        alt="GitHub"
        width="36"
        height="36"
        className="p-0.5 border border-slate-200 rounded-lg hover:border-slate-400 hover:cursor-pointer"
      />
      {/* Hashnode */}
      <SocialHandleButton
        to="https://hashnode.com/@tanjimashraf"
        target="_blank"
        title="Visit my Hashnode profile"
        src={HashnodeLogo}
        alt="Hashnode"
        width="36"
        height="36"
        className="p-0.5 border border-slate-200 rounded-lg hover:border-slate-400 hover:cursor-pointer"
      />
    </div>
  );
}
