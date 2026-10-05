import { useContext } from "react";
import { AuthContext } from "../../../../contexts/authContext";

export default function Avatar() {
  const { userProfile } = useContext(AuthContext);

  return (
    <div className="self-start mt-7">
      <img
        src={userProfile?.image}
        alt="user-avatar"
        width="36"
        height="36"
        className="bg-blue-300 p-1 rounded-lg"
      />
    </div>
  );
}
