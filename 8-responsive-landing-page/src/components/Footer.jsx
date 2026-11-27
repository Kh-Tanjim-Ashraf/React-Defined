import codeflowLogo from "../assets/codeflowLogo.png";
import XLogo from "../assets/icons/x.png";
import GitHubLogo from "../assets/icons/github.png";
import LinkedInLogo from "../assets/icons/linkedin.png";
import MailLogo from "../assets/icons/mail.png";

const footerLinks = {
  Product: ["Features", "Pricing", "Security", "Roadmap", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: [
    "Documentation",
    "Help Center",
    "Community",
    "API Reference",
    "Status",
  ],
  Legal: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Compliance"],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Main footer content - hidden on mobile, visible on sm and up */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          <div className="col-span-1 sm:col-span-3 lg:col-span-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-3 sm:mb-4">
              <div className="rounded-lg">
                <img
                  src={codeflowLogo}
                  alt="CodeFlow Logo"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold">
                <span className="text-white">Code</span>
                <span className="text-[#fa33d0]">Flow</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-xs mx-auto sm:mx-0 text-sm sm:text-base">
              Transform your workflow with AI-powered tools and automation.
              Built for modern teams.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              <a
                href="#"
                className="w-10 h-10 lg:w-12 lg:h-12 bg-slate-800 hover:bg-slate-700 transition-colors duration-200 flex items-center rounded-2xl"
              >
                <img
                  src={XLogo}
                  alt="X"
                  className="object-contain w-full h-full"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 lg:w-12 lg:h-12 bg-slate-800 hover:bg-slate-700 transition-colors duration-200 flex items-center rounded-2xl"
              >
                <img
                  src={GitHubLogo}
                  alt="Github"
                  className="object-contain w-full h-full"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 lg:w-12 lg:h-12 bg-slate-800 hover:bg-slate-700 transition-colors duration-200 flex items-center rounded-2xl"
              >
                <img
                  src={LinkedInLogo}
                  alt="Linkedin"
                  className="object-contain w-full h-full"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 lg:w-12 lg:h-12 bg-slate-800 hover:bg-slate-700 transition-colors duration-200 flex items-center rounded-2xl"
              >
                <img
                  src={MailLogo}
                  alt="Mailbox"
                  className="object-contain w-full h-full"
                />
              </a>
            </div>
          </div>

          {/* Footer links - visible on sm and up */}
          <div className="sm:col-span-3 lg:col-span-4">
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
                    {category}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t-0 sm:border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 CodeFlow. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
