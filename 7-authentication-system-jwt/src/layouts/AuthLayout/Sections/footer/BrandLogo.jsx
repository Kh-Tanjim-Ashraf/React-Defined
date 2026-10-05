import Image from "../../../../component/ui/Image";
import PeoplepanelBannerLogo from "../../../../assets/PeoplepanelBannerLogo.png";

export default function BrandLogo() {
  return (
    <Image
      src={PeoplepanelBannerLogo}
      alt="banner-logo"
      width="280"
      height="75"
    />
  );
}
