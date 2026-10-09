import { useState } from "react";
import { NavLink } from "react-router-dom";
import SVG from "../../../../component/ui/SVG";
import Badge from "../../../../component/ui/Badge";
import Image from "../../../../component/ui/Image";
import DashboardIcon from "../../../../assets/side-navbar-icons/DashboardIcon.png";
import ProductsIcon from "../../../../assets/side-navbar-icons/ProductsIcon.png";
import TodosIcon from "../../../../assets/side-navbar-icons/TodosIcon.png";
import UersIcon from "../../../../assets/side-navbar-icons/UersIcon.png";
import UserPostsIcon from "../../../../assets/side-navbar-icons/UserPostsIcon.png";

export default function SideNavbar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSideNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-col gap-4 py-4">
      {/* Navbar Toggle Button */}
      <div className="flex justify-end pr-2">
        {isOpen ? (
          // Close: Left-arrow
          <SVG
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8 p-2 border-[0.1px] border-slate-200 rounded-md hover:bg-sky-700 hover:text-white hover:cursor-pointer"
            onClick={toggleSideNavbar}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </SVG>
        ) : (
          // Open: Right-arrow
          <SVG
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8 p-2 border-[0.1px] border-slate-200 rounded-md hover:bg-sky-700 hover:text-white hover:cursor-pointer"
            onClick={toggleSideNavbar}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </SVG>
        )}
      </div>
      {/* Section: User Control */}
      <div>
        <div
          className={`px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider
        ${isOpen ? "inline" : "hidden"}`}
        >
          User Control
        </div>
        {!isOpen && <hr className="h-[0.1px] opacity-10" />}
        <div className="mt-2 space-y-1">
          {/* Dashboard */}
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `w-full px-4 py-2.5 text-sm hover:bg-sky-600 outline-0 hover:text-white transition-colors flex justify-start items-center gap-2 ${isActive ? `bg-sky-700 text-white font-medium` : `text-slate-600`}`
            }
          >
            {/* Icon */}
            <Badge>
              <Image src={DashboardIcon} alt="dashboard" className="w-4 h-4" />
            </Badge>
            {/* Text */}
            <Badge className={`${isOpen ? "inline" : "hidden"}`}>
              Dashboard
            </Badge>
          </NavLink>
          {/* User Directory */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `w-full px-4 py-2.5 text-sm hover:bg-sky-600 outline-0 hover:text-white transition-colors flex justify-start items-center gap-2 ${isActive ? `bg-sky-700 text-white font-medium` : `text-slate-600`}`
            }
          >
            {/* Icon */}
            <Badge>
              <Image src={UersIcon} alt="users" className="w-4 h-4" />
            </Badge>
            {/* Text */}
            <Badge className={`${isOpen ? "inline" : "hidden"}`}>
              User Directory
            </Badge>
          </NavLink>
          {/* Tasks (Todos) */}
          <a
            href="#todos"
            className="w-full px-4 py-2.5 text-sm text-slate-600 hover:bg-sky-700 hover:text-white transition-colors flex justify-start items-center gap-2"
          >
            {/* Icon */}
            <Badge>
              <Image src={TodosIcon} alt="todos" className="w-4 h-4" />
            </Badge>
            {/* Text */}
            <Badge className={`${isOpen ? "inline" : "hidden"}`}>
              Tasks (Todos)
            </Badge>
          </a>
        </div>
      </div>
      {/* Section: Store & Content */}
      <div>
        <div
          className={`px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider
        ${isOpen ? "inline" : "hidden"}
          `}
        >
          Store & Content
        </div>
        {!isOpen && <hr className="h-[0.1px] opacity-10" />}
        <div className="mt-2 space-y-1">
          {/* Products Stock */}
          <a
            href="#products"
            className="w-full px-4 py-2.5 text-sm text-slate-600 hover:bg-sky-700 hover:text-white transition-colors flex justify-start items-center gap-2"
          >
            <Badge>
              <Image src={ProductsIcon} alt="products" className="w-4 h-4" />
            </Badge>
            <Badge className={`${isOpen ? "inline" : "hidden"}`}>
              Products Stock
            </Badge>
          </a>
          {/* Posts */}
          <a
            href="#posts"
            className="w-full px-4 py-2.5 text-sm text-slate-600 hover:bg-sky-700 hover:text-white transition-colors flex justify-start items-center gap-2"
          >
            {/* Icon */}
            <Badge>
              <Image src={UserPostsIcon} alt="posts" className="w-4 h-4" />
            </Badge>
            {/* Text */}
            <Badge className={`${isOpen ? "inline" : "hidden"}`}>
              User Posts
            </Badge>
          </a>
        </div>
      </div>
    </nav>
  );
}
