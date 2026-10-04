import { clearLogin } from "../../utils/auth.utils";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import { useContext } from "react";
import { ErrorContext } from "../../contexts/errorContext";
import { LoadingContext } from "../../contexts/loadingContext";
import UserCard from "./sections/UserCard";
import { userList } from "../../services/user.service";
import Button from "../../component/ui/Button";

export default function Dashboard() {
  const [usersObject, setUsersObject] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { error, setError } = useContext(ErrorContext);
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  // Use to navigate through paginated user data
  const querySkip = searchParams.get("skip");
  const skip = Number.parseInt(querySkip ?? "", 10) || 0;

  const queryLimit = searchParams.get("limit");
  const limit = Number.parseInt(queryLimit ?? "", 10) || 20;

  const handleLogout = () => {
    clearLogin();
    navigate("/login", { replace: true });
  };

  useEffect(() => {
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
      {/* Toast Notification */}
      <Toaster richColors="true" closeButton="true" />
      <Link
        to="/dashboard"
        className="text-4xl text-sky-800 underline underline-offset-12"
      >
        Dashboard
      </Link>
      <button
        className="w-auto mt-6 ml-2 p-2 rounded-lg bg-sky-800 text-white cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>

      {/* Sample toast notification button */}
      <button
        className="w-auto bg-sky-500 mt-6 ml-2 p-2 rounded-lg text-white cursor-pointer"
        onClick={handleToast}
      >
        Sample toast
      </button>

      <h2 className="text-2xl text-sky-700">User List</h2>

      {/* User Card: Grid Panel */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4 p-4">
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
