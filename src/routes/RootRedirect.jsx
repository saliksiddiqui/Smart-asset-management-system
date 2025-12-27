import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RootRedirect() {
  const { currentUser } = useSelector((s) => s.users);

  return currentUser
    ? <Navigate to={`/${currentUser.role}`} replace />
    : <Navigate to="/login" replace />;
}
