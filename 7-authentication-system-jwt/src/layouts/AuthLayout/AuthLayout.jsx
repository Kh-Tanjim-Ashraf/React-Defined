import { Navigate, Outlet } from "react-router-dom";
import { getTokens } from "../../utils/auth.utils";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { LoadingContext } from "../../contexts/loadingContext";
import { ErrorContext } from "../../contexts/errorContext";
import { aboutMe } from "../../services/auth.service";
import SideNavbar from "./Sections/side-navbar/SideNavbar";
import Header from "./Sections/header/Header";
import Footer from "./Sections/footer/Footer";

// AUTHENTICATED LAYOUT (Side Navbar, Dashboard)
export default function AuthLayout() {
  const [userProfile, setUserProfile] = useState();
  const { setIsLoading } = useContext(LoadingContext);
  const { setError } = useContext(ErrorContext);

  // If tokens unavailable, redirect to login page instantly
  const tokens = getTokens();
  if (!tokens) return <Navigate to="/login" replace />;

  // User profile invoked
  useEffect(() => {
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

  return (
    <div className="dashboard-layout flex">
      <AuthContext.Provider value={{ userProfile, setUserProfile }}>
        <SideNavbar />
        <main className="grow min-h-screen flex flex-col bg-slate-100">
          <Header />
          <Outlet />
          <Footer />
        </main>
      </AuthContext.Provider>
    </div>
  );
}
