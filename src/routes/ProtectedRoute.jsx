import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children, role }) {
  const { currentUser } = useSelector((s) => s.users);

  if (!currentUser) return <Navigate to="/login" replace />;
  if (role && currentUser.role !== role)
    return <Navigate to="/login" replace />;

  return children;
}
