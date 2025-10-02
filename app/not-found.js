"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-green-600">
      <h1 className="text-9xl font-bold text-gray-100 stroke-teal-500 stroke-2">
        404
      </h1>
      <p className="text-2xl mt-4">Page Not Found</p>
      <p className="mt-2 text-gray-100 text-2xl">
        The page you are looking for is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="mt-6 text-black text-3xl hover:bg-white font-semibold bg-[#83AEEE] p-6 rounded-full"
      >
        Go back home
      </Link>
    </div>
  );
}
