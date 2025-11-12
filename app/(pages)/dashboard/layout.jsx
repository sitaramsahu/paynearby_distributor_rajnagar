"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";
import { Home, Users, CreditCard, User, LogOut } from "lucide-react";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", icon: Home, href: "/dashboard" },
    { name: "Partners", icon: Users, href: "/dashboard/partners" },
    { name: "Payments", icon: CreditCard, href: "/dashboard/payments" },
    { name: "Users", icon: User, href: "/dashboard/users" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md fixed h-full p-5">
        <h1 className="text-2xl font-bold text-amber-600 mb-6">Admin Panel</h1>
        <nav className="space-y-2">
          {menu.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md hover:bg-amber-100 transition",
                  pathname === item.href && "bg-amber-200 font-medium"
                )}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="mt-8 flex items-center gap-2 text-red-600 hover:text-red-800"
        >
          <LogOut size={18} /> Logout
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-64 p-8">{children}</main>
    </div>
  );
}
