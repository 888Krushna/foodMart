"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { FiHome, FiUserPlus, FiUsers, FiLogOut } from "react-icons/fi";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  if (pathname === "/login") return null;

  return (
    <aside className="w-64 h-screen sticky bg-gray-900 text-white shadow-2xl p-6 flex flex-col">
      {/* Logo Section */}
      <div className="mb-10 flex items-center">
        <h1 className="text-2xl font-bold text-cyan-400 tracking-wide">
          My Store
        </h1>
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col gap-5">
        <Link href="/dashboard" className="group">
          <div className="flex items-center p-3 rounded-xl cursor-pointer hover:bg-cyan-600 transition">
            <FiHome className="mr-3 text-xl group-hover:text-white" />
            <span className="text-lg">Dashboard</span>
          </div>
        </Link>

        <Link href="/create-customer" className="group">
          <div className="flex items-center p-3 rounded-xl cursor-pointer hover:bg-cyan-600 transition">
            <FiUserPlus className="mr-3 text-xl group-hover:text-white" />
            <span className="text-lg">Create Customer</span>
          </div>
        </Link>

        <Link href="/view-customer" className="group">
          <div className="flex items-center p-3 rounded-xl cursor-pointer hover:bg-cyan-600 transition">
            <FiUsers className="mr-3 text-xl group-hover:text-white" />
            <span className="text-lg">View Customer</span>
          </div>
        </Link>

        <Link
          onClick={() => {
            localStorage.removeItem("token");
            router.push("/login");
          }}
          href="/login"
          className="group"
        >
          <div className="flex items-center p-3 rounded-xl cursor-pointer hover:bg-red-600 transition">
            <FiLogOut className="mr-3 text-xl group-hover:text-white" />
            <span className="text-lg">Logout</span>
          </div>
        </Link>
      </nav>
    </aside>
  );
}
