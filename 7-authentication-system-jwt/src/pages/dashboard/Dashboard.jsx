import { clearLogin } from "../../utils/auth.utils";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import { useContext } from "react";
import { ErrorContext } from "../../contexts/errorContext";
import { LoadingContext } from "../../contexts/loadingContext";
import UserCard from "./sections/UserCard";
import { aboutMe } from "../../services/auth.service";
import { userList } from "../../services/user.service";
import Button from "../../component/ui/Button";
import peoplepanelBannerLogo from "../../assets/peoplepanelBannerLogo.png";
import Badge from "../../component/ui/Badge";

export default function Dashboard() {
  const [userProfile, setUserProfile] = useState();
  const [usersObject, setUsersObject] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { error, setError } = useContext(ErrorContext);
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  // Use to navigate through paginated user data
  const querySkip = searchParams.get("skip");
  const skip = Number.parseInt(querySkip ?? "", 10) || 0;

  const queryLimit = searchParams.get("limit");
  const limit = Number.parseInt(queryLimit ?? "", 10) || 20;

  const searchInputClass = `w-full ${!searchInput ? "p-[8px_12px_8px_36px]" : "p-[8px_12px_8px_12px]"} text-sm rounded-lg bg-white border-[0.5px] border-slate-200 focus:outline-[0.5px] focus:outline-sky-700 self-center [grid-area:stack]`;

  const handleLogout = () => {
    clearLogin();
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    // Profile invoke service
    const fetchProfile = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await aboutMe();
        setUserProfile(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    // User list service
    const fetchUserList = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await userList(limit, skip);
        setUsersObject(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserList();
  }, [searchParams]);

  // Trigger Sonner Toast
  const handleToast = () => {
    toast.success("Event has been created");
  };

  // Page Navigation: Previous
  const handlePrev = () => {
    if (skip <= 20) {
      const clearedSearchParams = new URLSearchParams(searchParams);
      clearedSearchParams.delete("skip");
      clearedSearchParams.delete("limit");
      setSearchParams(clearedSearchParams);
    } else {
      setSearchParams({ limit: limit, skip: Math.max(0, skip - limit) });
    }
  };

  // Page Navigation: Next
  const handleNext = () => {
    if (skip < 200) {
      setSearchParams({ limit: limit, skip: skip + limit }); // Initial; skip:0, limit:20
    }
  };

  return (
    <>
      {/* Header */}
      <div className="min-h-20 flex items-center gap-32 px-5 bg-white border-b border-slate-200 shadow-md">
        {/* Banner logo */}
        <img
          src={peoplepanelBannerLogo}
          alt="banner-logo"
          width="200"
          height="75"
          className="self-start mt-4"
        />
        {/* Search Bar, Filter & Sorting */}
        <div className="grow flex flex-col gap-3 py-4">
          {/* Search Bar */}
          <div className="grid [grid-template-areas:'stack']">
            {/* Search Icon */}
            {!searchInput && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
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
              </svg>
            )}

            {/* Serach Input */}
            <input
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
            <Button className="flex items-center gap-1 px-2 py-1 text-sm border border-slate-200 cursor-pointer rounded-lg hover:bg-sky-800 hover:border-sky-800 hover:text-white transition-all">
              <Badge>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                  />
                </svg>
              </Badge>
              Filter by Name
            </Button>
            {/* Filter by location */}
            <Button className="flex items-center gap-1 px-2 py-1 text-sm border border-slate-200 cursor-pointer rounded-lg hover:bg-sky-800 hover:border-sky-800 hover:text-white transition-all">
              <Badge>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                  />
                </svg>
              </Badge>
              Filter by Location
            </Button>
            {/* Filter by blood group */}
            <Button className="flex items-center gap-1 px-2 py-1 text-sm border border-slate-200 cursor-pointer rounded-lg hover:bg-sky-800 hover:border-sky-800 hover:text-white transition-all">
              <Badge>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                  />
                </svg>
              </Badge>
              Filter by Blood Group
            </Button>
            {/* Filter by gender */}
            <Button className="flex items-center gap-1 px-2 py-1 text-sm border border-slate-200 cursor-pointer rounded-lg hover:bg-sky-800 hover:border-sky-800 hover:text-white transition-all">
              <Badge>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                  />
                </svg>
              </Badge>
              Filter by Gender
            </Button>
          </div>
        </div>
        {/* Avatar Logo */}
        <div className="self-start mt-4">
          <img
            src={userProfile?.image}
            alt="user-avatar"
            width="36"
            height="36"
            className="bg-blue-300 p-1 rounded-lg"
          />
        </div>
      </div>

      {/* User Card: Grid Panel */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4 p-4 mt-10">
        {/* Card */}
        {isLoading ? (
          <p>Loading...</p>
        ) : usersObject?.users ? (
          usersObject.users.map((user) => (
            <UserCard user={user} key={user.id} />
          ))
        ) : (
          <></>
        )}
      </div>

      {/* // Navigation Button (Pagination)  */}
      <div className="flex justify-center items-center gap-4 py-4 pb-8">
        <Button
          className={`px-4 py-2 border cursor-pointer rounded-lg disabled:cursor-not-allowed ${isLoading || skip < 20 ? "text-slate-400 border-slate-200" : "border-slate-300 hover:bg-sky-800 hover:border-sky-800 hover:text-white transition-all"}`}
          onClick={handlePrev}
          disabled={isLoading || skip < 20}
        >
          Prev
        </Button>
        <Button
          className={`px-4 py-2 border cursor-pointer rounded-lg disabled:cursor-not-allowed ${isLoading || skip >= 200 ? "text-slate-400 border-slate-200" : "border-slate-300 hover:bg-sky-800 hover:border-sky-800 hover:text-white transition-all"}`}
          onClick={handleNext}
          disabled={isLoading || skip >= 200}
        >
          Next
        </Button>
      </div>
    </>
  );
}
