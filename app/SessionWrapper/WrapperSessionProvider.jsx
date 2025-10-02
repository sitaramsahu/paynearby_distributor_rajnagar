"use client"; // ← required for SessionProvider and Navbar/Footer hooks

import { SessionProvider } from "next-auth/react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function WrapperSessionProvider({ children }) {
  return (
    <SessionProvider>
      <Navbar />
      {children}
      <Footer />
    </SessionProvider>
  );
}
