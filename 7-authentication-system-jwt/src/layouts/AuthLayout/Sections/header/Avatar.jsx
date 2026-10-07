import { useState, useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../../../contexts/authContext";

export default function Avatar() {
  const [isOpen, setIsOpen] = useState(false);
  const { userProfile } = useContext(AuthContext);
  const avatarDropdownRef = useRef(null); // Sticky note for the avatar-icon-wrapper element which contains both the icon-image & the collapsible dropdown

  useEffect(() => {
    const handleClickOutsideDropdown = (event) => {
      // Check if the clicked div/HTML element doesn't equal to the `<img>` or collapsible `<div>` of the avatar-icon-wrapper section
      if (
        avatarDropdownRef.current &&
        !avatarDropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // Add an event listerner on the mount of this component, which will be responsible for letting the users to close the avatar-icon's dropdown menu naturally
    document.addEventListener("mousedown", handleClickOutsideDropdown);

    // Cleanup function: Remove the event-listener when this component is unmounted from the DOM.
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDropdown);
    };
  });

  const toggleAvatarDropdown = () => {
    // console.log("Toggle dropdown");
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="relative self-start mt-7 flex flex-col"
      ref={avatarDropdownRef}
    >
      {/* Avatar Icon */}
      <img
        src={userProfile?.image}
        alt="user-avatar"
        width="36"
        height="36"
        className="bg-blue-300 p-1 rounded-lg self-end hover:cursor-pointer"
        onClick={toggleAvatarDropdown}
      />
      {/* Collapsible Dropdown */}
      {isOpen && (
        <div
          className={`absolute right-0 top-0 w-30 h-auto flex flex-col bg-white rounded-md mt-10 border-[0.1px] border-slate-300 shadow-lg z-10 origin-top-right transition-all duration-300 ease-out
          ${
            isOpen
              ? "transform opacity-100 scale-100 visible"
              : "transform opacity-0 scale-95 invisible pointer-events-none"
          }
        `}
        >
          <p className="font-semibold text-sm px-2 py-2.5 rounded-t-md hover:bg-sky-700 hover:text-white hover:cursor-pointer">
            {`${userProfile.firstName} ${userProfile.lastName}`}
          </p>
          <hr className="h-[0.01px] opacity-15" />
          <p className="text-sm px-2 py-2.5 rounded-b-md hover:bg-sky-700 hover:text-white hover:font-semibold hover:cursor-pointer">
            Logout
          </p>
        </div>
      )}
    </div>
  );
}
