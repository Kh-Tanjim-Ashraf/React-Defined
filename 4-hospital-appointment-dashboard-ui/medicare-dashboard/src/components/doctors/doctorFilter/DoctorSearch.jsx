import SearchIcon from "../../../assets/search.png";

export default function DoctorSearch({
  searchInputValue,
  setSearchInputValue,
}) {
  return (
    <div className="doctor-search-wrapper">
      {/* Render the search-icon when the search-input field is empty */}
      {searchInputValue === "" && (
        <div className="search-icon-container">
          <img
            src={SearchIcon}
            alt="search-icon"
            className="doctor-search-icon"
          />
        </div>
      )}
      <input
        type="text"
        className="doctor-search-input"
        name="doctor-search-input"
        value={searchInputValue}
        onChange={(event) => setSearchInputValue(event.target.value)}
        placeholder="Search doctor by name..."
      />
    </div>
  );
}
