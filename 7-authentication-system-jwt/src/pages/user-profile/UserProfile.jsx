import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { userDetail } from "../../services/user.service";
import { LoadingContext } from "../../contexts/loadingContext";
import { ErrorContext } from "../../contexts/errorContext";

export default function UserProfile() {
  // Store user information fetched from the API
  const [userDetailObj, setUserDetailObj] = useState({});

  // Retrieve user id (destructured) from the browser URL
  const { id } = useParams();

  // Get the global context data
  const { error, setError } = useContext(ErrorContext);
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    const fetchUserDetail = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await userDetail(id);
        setUserDetailObj(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    // Invoke the user-detail service
    fetchUserDetail();
  }, []);

  console.log("userDetail:", userDetailObj);

  return (
    <>
      {/* Main Content */}
      <div className="grow flex flex-col justify-center items-center">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h1 className="text-2xl">User Profile</h1>
            <p>User ID: {userDetailObj.id}</p>
          </>
        )}
      </div>
    </>
  );
}
