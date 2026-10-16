import { useParams } from "react-router-dom";

export default function UserProfile() {
  // Retrieve user id (destructured) from the browser URL
  const { id } = useParams();

  return (
    <>
      {/* Main Content */}
      <div className="grow flex flex-col justify-center items-center">
        <h1 className="text-2xl">User Profile</h1>
        <p>User ID: {id}</p>
      </div>
    </>
  );
}
