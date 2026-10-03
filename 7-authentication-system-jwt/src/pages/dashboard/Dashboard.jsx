import { clearLogin } from "../../utils/auth.utils";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { aboutMe } from "../../services/auth.service";
import { Toaster, toast } from "sonner";
import { useContext } from "react";
import { ErrorContext } from "../../contexts/errorContext";
import { LoadingContext } from "../../contexts/loadingContext";
import UserCard from "./sections/UserCard";

export default function Dashboard(
  {
    // error,
    // setError,
    // isLoading,
    // setIsLoading,
  },
) {
  const [userProfile, setUserProfile] = useState({});
  const navigate = useNavigate();
  const { error, setError } = useContext(ErrorContext);
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  const handleLogout = () => {
    clearLogin();
    navigate("/login", { replace: true });
  };

  // useEffect(() => {
  //   const fetchAboutMe = async () => {
  //     setIsLoading(true);
  //     setError(null);
  //     try {
  //       const data = await aboutMe();
  //       setUserProfile(data);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchAboutMe();
  // }, []);

  // Trigger Sonner
  const handleToast = () => {
    toast.success("Event has been created");
  };

  return (
    <>
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

      {/* Sample toast notification */}
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
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </>
  );
}
