"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    role: "User",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });
      const data = await res.json();
      setLoading(false);

      if (res.ok) router.push("/login");
      else setError(data.error || "Something went wrong ❌");
    } catch (err) {
      setLoading(false);
      setError("Server error ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form className="space-y-4" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            value={registerData.name}
            onChange={(e) =>
              setRegisterData({ ...registerData, name: e.target.value })
            }
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={registerData.email}
            onChange={(e) =>
              setRegisterData({ ...registerData, email: e.target.value })
            }
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={registerData.password}
            onChange={(e) =>
              setRegisterData({ ...registerData, password: e.target.value })
            }
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white p-2 rounded font-bold hover:bg-green-700"
          >
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-green-600 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
