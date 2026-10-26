import { useState } from "react";
import NavLink from "./NavLink";
import codeflowLogo from "../../assets/codeflowLogo.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const navLinks = ["Features", "Pricing", "Testimonials"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/20 text-gray-300">
      {/* <nav className="fixed top-0 w-full z-50 bg-amber-800 text-gray-300"> */}
      {/* Navbar Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nav Container: Logo & Links */}
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <div className="cursor-pointer">
            <a href="#" className="flex items-center gap-1">
              <img
                src={codeflowLogo}
                alt="CodeFlow"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
              <span className="text-lg sm:text-xl md:text-2xl font-medium">
                <span>Code</span>
                <span className="text-[#fa33d0]">Flow</span>
              </span>
            </a>
          </div>
          {/* Nav Links */}
          {/* Disappears when screen resolution < 768px */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm md:text-base">
            {navLinks.map((link, index) => (
              <NavLink
                key={index} // Using `index` arg since the array is static/hard-coded
                href={`#${link.toLowerCase()}`}
                className="hover:text-white"
                linkName={link}
              />
            ))}
          </div>
          {/* Mobile Navbar Toggle Button */}
          {/* Disappears when screen resolution > 768px */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 hover:text-white" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 hover:text-white" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu Nav Links */}
      {mobileMenuIsOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 py-4 sm:px-6 sm:py-6 sm:gap-6 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
          {navLinks.map((link, index) => (
            <NavLink
              key={index} // Using `index` arg since the array is static/hard-coded
              href={`#${link.toLowerCase()}`}
              className="hover:text-white"
              onClick={() => setMobileMenuIsOpen(false)}
              linkName={link}
            />
          ))}
        </div>
      )}
    </nav>
  );
}
