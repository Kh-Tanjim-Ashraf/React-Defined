import PeoplepanelBannerLogo from "../../../../assets/peoplepanelBannerLogo.png";
import Image from "../../../../component/ui/Image";

export default function BannerLogo() {
  return (
    <Image
      src={PeoplepanelBannerLogo}
      alt="banner-logo"
      width="200"
      height="75"
      className="self-start mt-7"
    />
  );
}
