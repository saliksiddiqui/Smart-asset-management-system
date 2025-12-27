import { useDispatch } from "react-redux";
import { signupUser } from "../features/users/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "employee",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(form));
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center">Create Account</h2>

        <input
          className="w-full border p-2 rounded"
          placeholder="Username"
          required
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          className="w-full border p-2 rounded"
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="w-full border p-2 rounded"
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <div className="flex justify-between">
          {["employee", "manager", "admin"].map((r) => (
            <label key={r} className="flex items-center gap-1">
              <input
                type="radio"
                name="role"
                checked={form.role === r}
                onChange={() => setForm({ ...form, role: r })}
              />
              {r}
            </label>
          ))}
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Sign Up
        </button>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
