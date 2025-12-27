import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/users/userSlice";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((s) => s.users);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login", { replace: true });
  };

  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div>
        <h1 className="text-xl font-semibold">Smart Asset System</h1>
        <p className="text-sm text-gray-300">
          {currentUser?.role.toUpperCase()} Dashboard
        </p>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-200">
          👤 {currentUser?.username}
        </span>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-1.5 rounded-md text-sm transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
