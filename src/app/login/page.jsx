"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Set dummy token in localStorage
    localStorage.setItem("token", "dummytoken");

    // Redirect to dashboard after login
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md transform transition hover:scale-[1.02]">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Please login to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-xl font-semibold transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-gray-500 text-sm mt-6 text-center">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-cyan-600 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
