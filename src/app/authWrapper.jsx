"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function AuthWrapper({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Skip auth check on login page to avoid infinite loop
    if (pathname === "/login") {
      setLoading(false);
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    setLoading(false);
  }, [pathname, router]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return <>{children}</>;
}
