import BannerLogo from "./BannerLogo";
import SearchFilterSort from "./SearchFilterSort";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <div className="min-h-32 flex items-center gap-32 px-5 bg-white border-b border-slate-200 shadow-md">
      {/* Banner logo */}
      <BannerLogo />
      {/* Search Bar, Filter & Sort */}
      <SearchFilterSort />
      {/* Avatar */}
      <Avatar />
    </div>
  );
}
