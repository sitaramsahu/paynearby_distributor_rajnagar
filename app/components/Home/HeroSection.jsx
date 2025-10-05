"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";

const heroImages = [
  "/images/join.png",
  "/images/empowering.png",
  "/images/shameless.png",
];
export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Auto slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section
      id="home"
      className="mt-20 min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 via-purple-100 to-blue-300 relative overflow-hidden"
    >
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <div className="w-full max-w-7xl flex flex-col md:flex-row justify-around gap-6 items-center">
          {/* Left */}
          <h1 className="text-xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-transparent bg-clip-text text-center md:text-left">
            PayNearby Distributor
          </h1>
          {/* Right */}
          <h1 className="text-xl md:text-4xl font-extrabold bg-gradient-to-r from-green-600 via-blue-500 to-purple-500 text-transparent bg-clip-text mt-4 md:mt-0 text-center md:text-right">
            Raju Cyber Seva
          </h1>
        </div>
      </motion.div>

      {/* Owner Name */}
      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="p-0 text-2xl md:text-4xl font-semibold text-blue-900 z-10"
      >
        <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
          Owner:
        </span>{" "}
        Sita Ram Sahu
      </motion.h3>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-4 text-lg md:text-xl text-gray-700 text-center max-w-2xl z-10"
      >
        Your trusted distributor for{" "}
        <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          digital financial services
        </span>
        .
      </motion.p>

      {/* Button */}
      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition z-10"
      >
        <Link href="/retailer-partner">Become a Retailer Partner</Link>
      </motion.button>

      {/* Image Slider */}
      <div className="mt-2 relative w-full flex justify-center items-center z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={heroImages[currentIndex]}
            src={heroImages[currentIndex]}
            alt="Hero Image"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -30 }}
            transition={{ duration: 0.8 }}
            className="max-h-[70vh] max-w-[90vw] rounded-2xl shadow-2xl border-4 border-white relative"
          />
        </AnimatePresence>
      </div>
    </section>
  );
}
