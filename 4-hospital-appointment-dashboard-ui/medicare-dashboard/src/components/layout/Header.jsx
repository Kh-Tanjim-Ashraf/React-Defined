import HeaderBrand from "./Header/HeaderBrand";
import HeaderCenter from "./Header/HeaderCenter";
import HeaderAction from "./Header/HeaderAction";

export default function Header() {
  return (
    <header>
      <div className="header-container-wrapper">
        <HeaderBrand />
        <HeaderCenter />
        <HeaderAction />
      </div>
    </header>
  );
}
