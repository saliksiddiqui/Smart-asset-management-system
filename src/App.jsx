// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Employee from "./pages/Employee";
import Manager from "./pages/Manager";
import Admin from "./pages/Admin";
import ProtectedRoute from "./routes/ProtectedRoute";
import Signup from "./pages/Signup";
import RootRedirect from "./routes/RootRedirect";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/employee"
        element={
          <ProtectedRoute role="employee">
            <Employee />
          </ProtectedRoute>
        }
      />
      <Route
        path="/manager"
        element={
          <ProtectedRoute role="manager">
            <Manager />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <Admin />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
