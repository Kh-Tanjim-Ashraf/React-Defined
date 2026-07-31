import SearchIcon from "../../../assets/search.png";

export default function DoctorSearch({ inputValue, setInputValue }) {
  return (
    <div className="doctor-search-wrapper">
      {inputValue === "" && (
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
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Search doctor by name..."
      />
    </div>
  );
}
