"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-gray-300">
      <h1 className="text-9xl font-bold text-gray-700 stroke-teal-500 stroke-2">
        404
      </h1>
      <p className="text-2xl mt-4">Page Not Found</p>
      <p className="mt-2 text-red-700 text-2xl">
        The page you are looking for is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="mt-6 text-black text-3xl hover:bg-green-600 hover:text-white font-semibold bg-[#83AEEE] p-6 rounded-full"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
