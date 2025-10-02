"use client";

import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    if (session?.user) {
      setUserRole(session.user.role); // role from session
    }
  }, [session]);

  if (status === "loading") {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!session) {
    return (
      <div className="text-center mt-20">
        <p>You are not logged in ❌</p>
        <a
          href="/login"
          className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded"
        >
          Go to Login
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 mt-16">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          Welcome, {session.user.name || "User"}!
        </h1>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {userRole === "admin" ? (
          <>
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-bold mb-2">Admin Panel</h2>
              <p>Manage users, view reports, and configure system settings.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-bold mb-2">Analytics</h2>
              <p>View statistics, user activity, and system health.</p>
            </div>
          </>
        ) : (
          <>
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-bold mb-2">User Dashboard</h2>
              <p>View your profile, bookings, and account settings.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-bold mb-2">Support</h2>
              <p>Access help articles or contact support.</p>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
