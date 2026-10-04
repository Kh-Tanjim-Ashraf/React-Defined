import { clearLogin } from "../../utils/auth.utils";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const { error, setError } = useContext(ErrorContext);
  const { isLoading, setIsLoading } = useContext(LoadingContext);

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

  // Trigger Sonner Toast
  const handleToast = () => {
    toast.success("Event has been created");
  };

  // console.log("loading:", isLoading);
  console.log("usersObject:", usersObject);

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

      {/* Navigation Button (Pagination) */}
      <div className="flex justify-center items-center gap-4 py-4 pb-8">
        <Button className="px-4 py-2 border border-slate-300 cursor-pointer rounded-lg hover:bg-sky-800 hover:border-sky-800 hover:text-white transition-all">
          Prev
        </Button>
        <Button className="px-4 py-2 border border-slate-300 cursor-pointer rounded-lg hover:bg-sky-800 hover:border-sky-800 hover:text-white transition-all">
          Next
        </Button>
      </div>
    </>
  );
}
