import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const Profile = () => {
  const user = useSelector((state) => state.auth.value);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-100 bg-gradient-to-tl from-blue-300 to-blue-100 px-2 py-2 sm:px-8 sm:py-9">
        <div className="min-h-screen w-full rounded-md bg-white p-6 shadow-md">
          <p>{user.displayName}</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
