import { clearLogin } from "../../utils/auth.utils";
import { useNavigate, useSearchParams } from "react-router-dom";
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
  const skip = Number.parseInt(querySkip ?? "", 10) || 20;

  const handleLogout = () => {
    clearLogin();
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    const fetchUserList = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await userList();
        setUsersObject(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserList();
  }, []);

  useEffect(() => {
    if (querySkip !== null && Number(querySkip) <= 20) {
      const nextSearchParams = new URLSearchParams(searchParams);
      nextSearchParams.delete("skip");
      setSearchParams(nextSearchParams, { replace: true });
    }
  }, [querySkip, searchParams, setSearchParams]);

  // Trigger Sonner Toast
  const handleToast = () => {
    toast.success("Event has been created");
  };

  // Page Navigation: Previous
  const handlePrev = () => {
    if (skip <= 20) {
      const nextSearchParams = new URLSearchParams(searchParams);
      nextSearchParams.delete("skip");
      setSearchParams(nextSearchParams);
    } else {
      console.log("Invoke previous page!");
      setSearchParams({ skip: skip - 20 });
    }
  };

  // Page Navigation: Next
  const handleNext = () => {
    if (skip < 208) {
      console.log("Invoke next page!");
      setSearchParams({ skip: skip + 20 });
    } else {
      console.log("Display a teach message about exceeding limit");
    }
  };

  return (
    <>
      {/* Toast Notification */}
      <Toaster richColors="true" closeButton="true" />
      <h1 className="text-4xl text-sky-800 underline underline-offset-12">
        Dashboard
      </h1>
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
          className={`px-4 py-2 border cursor-pointer rounded-lg disabled:cursor-not-allowed ${skip <= 20 ? "text-slate-400 border-slate-200" : "border-slate-300 hover:bg-sky-800 hover:border-sky-800 hover:text-white transition-all"}`}
          onClick={handlePrev}
          disabled={skip <= 20}
        >
          Prev
        </Button>
        <Button
          className={`px-4 py-2 border cursor-pointer rounded-lg disabled:cursor-not-allowed ${skip >= 208 ? "text-slate-400 border-slate-200" : "border-slate-300 hover:bg-sky-800 hover:border-sky-800 hover:text-white transition-all"}`}
          onClick={handleNext}
          disabled={skip >= 208}
        >
          Next
        </Button>
      </div>
    </>
  );
}
