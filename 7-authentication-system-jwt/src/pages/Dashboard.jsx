import { clearLogin } from "../utils/auth.utils";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { aboutMe } from "../services/auth.service";
import { Toaster, toast } from "sonner";
import { useContext } from "react";
import { ErrorContext } from "../contexts/errorContext";
import { LoadingContext } from "../contexts/loadingContext";

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

  useEffect(() => {
    const fetchAboutMe = async () => {
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

    fetchAboutMe();
  }, []);

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
        className="w-auto bg-sky-800 mt-6 ml-2 p-2 rounded-lg text-white cursor-pointer"
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

      <h2 className="text-2xl text-sky-700">User Profile</h2>
      {error ? (
        <>Error...</>
      ) : !isLoading ? (
        <>
          <p>id: {userProfile.id}</p>
          <p>firstName: {userProfile.firstName}</p>
          <p>lastName: {userProfile.lastName}</p>
          <p>maidenName: {userProfile.maidenName}</p>
          <p>gender: {userProfile.gender}</p>
          <p>phone: {userProfile.phone}</p>
          <p>username: {userProfile.username}</p>
          <p>birthDate: {userProfile.birthDate}</p>
          <p>image: {userProfile.image}</p>
          <p>bloodGroup: {userProfile.bloodGroup}</p>
          <p>height: {userProfile.height}</p>
          <p>weight: {userProfile.weight}</p>
          <p>hair color: {userProfile?.hair?.color}</p>
          <p>hair type: {userProfile?.hair?.type}</p>
          <p>ip: {userProfile.ip}</p>
          <p>macAddress: {userProfile.macAddress}</p>
          <p>university: {userProfile.university}</p>
          <p>bank cardExpire: {userProfile?.bank?.cardExpire}</p>
          <p>bank cardNumber: {userProfile?.bank?.cardNumber}</p>
          <p>bank cardType: {userProfile?.bank?.cardType}</p>
          <p>bank currency: {userProfile?.bank?.currency}</p>
          <p>bank iban: {userProfile?.bank?.iban}</p>
          <p>role: {userProfile.role}</p>
        </>
      ) : (
        <>Loading...</>
      )}
    </>
  );
}
