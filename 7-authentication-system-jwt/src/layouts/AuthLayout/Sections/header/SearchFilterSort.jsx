import { useState } from "react";
import Badge from "../../../../component/ui/Badge";
import SVG from "../../../../component/ui/SVG";
import Input from "../../../../component/ui/Input";
import FilterButton from "../../../../component/filter-button/FilterButton";

export default function SearchFilterSort() {
  const [searchInput, setSearchInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchInputClass = `w-full ${!searchInput ? "p-[8px_12px_8px_36px]" : "p-[8px_12px_8px_12px]"} text-sm rounded-lg bg-white border-[0.5px] border-slate-200 focus:outline-[0.5px] focus:outline-sky-700 self-center [grid-area:stack]`;

  const toggleFilterButtonDropdown = () => {
    setIsOpen((open) => !open);
  };

  const filterButtons = [
    "Filter by Name",
    "Filter by Location",
    "Filter by Blood Group",
    "Filter by Gender",
  ];

  return (
    <div className="grow flex flex-col gap-3 py-4">
      {/* Search Bar & Filter-toggle Button */}
      <div className="flex gap-2 items-center">
        {/* Search Bar */}
        <div className="grow grid [grid-template-areas:'stack']">
          {/* Search Icon */}
          {!searchInput && (
            <SVG
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              width="16"
              height="16"
              className="self-center [grid-area:stack] z-10 ml-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </SVG>
          )}
          {/* Serach Input */}
          <Input
            type="search"
            placeholder="Search users..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className={searchInputClass}
          />
        </div>
        {/* Filter-toggle Button */}
        <Badge
          className="rounded-lg border border-slate-300 hover:bg-sky-800 hover:border-sky-800 hover:text-white hover:cursor-pointer transition-all"
          onClick={toggleFilterButtonDropdown}
        >
          <SVG
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 m-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
            />
          </SVG>
        </Badge>
      </div>
      {/* Collapsible Div: Fliter & Sorting Buttons */}
      <div
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`grid z-10 transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="flex min-h-0 flex-wrap justify-end gap-2 overflow-hidden py-0.5">
          {filterButtons.map((buttonName, index) => (
            <div
              key={buttonName}
              className={`transition-[opacity,transform] duration-300 ease-out ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? `${index * 60}ms` : "0ms" }}
            >
              <FilterButton buttonName={buttonName} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
