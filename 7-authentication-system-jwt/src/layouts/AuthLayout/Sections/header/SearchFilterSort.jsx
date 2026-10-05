import { useState } from "react";
import SVG from "../../../../component/ui/SVG";
import Input from "../../../../component/ui/Input";
import FilterButton from "../../../../component/filter-button/FilterButton";

export default function SearchFilterSort() {
  const [searchInput, setSearchInput] = useState("");
  const searchInputClass = `w-full ${!searchInput ? "p-[8px_12px_8px_36px]" : "p-[8px_12px_8px_12px]"} text-sm rounded-lg bg-white border-[0.5px] border-slate-200 focus:outline-[0.5px] focus:outline-sky-700 self-center [grid-area:stack]`;

  return (
    <div className="grow flex flex-col gap-3 py-4">
      {/* Search Bar */}
      <div className="grid [grid-template-areas:'stack']">
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
      {/* Fliter & Sorting Button */}
      <div className="flex gap-2 justify-end">
        {/* Filter by name */}
        <FilterButton buttonName="Filter by Name" />

        {/* Filter by location */}
        <FilterButton buttonName="Filter by Location" />

        {/* Filter by blood group */}
        <FilterButton buttonName="Filter by Blood Group" />

        {/* Filter by gender */}
        <FilterButton buttonName="Filter by Gender" />
      </div>
    </div>
  );
}
