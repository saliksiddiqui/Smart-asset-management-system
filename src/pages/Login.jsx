import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../features/users/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const { users } = useSelector((s) => s.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError]=useState('');

  const [cred, setCred] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    const found = users.find(
      (u) => u.email === cred.email && u.password === cred.password
    );

    if (!found) {
      setError("Invalid email or password");
      return;
    }

    dispatch(loginUser(found));
    navigate(`/${found.role}`, { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <input
          className="w-full border p-2 rounded"
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setCred({ ...cred, email: e.target.value })}
        />

        <input
          className="w-full border p-2 rounded"
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setCred({ ...cred, password: e.target.value })}
        />
         {error && <p className="text-red-500">{error}</p>}
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Login
        </button>

        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
