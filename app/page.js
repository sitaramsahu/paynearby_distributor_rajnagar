"use client";

import { motion } from "framer-motion";
import HeroSection from "@/app/components/Home/HeroSection";
import About from "@/app/components/Home/About";
import Services from "@/app/components/Home/Services";
import Contact from "@/app/components/Home/Contact";

// import { useTheme } from "@/app/contexts/ThemeContext";

export default function Home() {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <HeroSection />
      {/* 2. Services Section */}
      <Services />
      {/* 3. About Section */}
      <About />
      {/* 4. Package Section */}
      <motion.div
        id="package"
        className="flex flex-col md:flex-row bg-gray-100 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Left Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-blue-900 text-white flex flex-col items-center justify-center p-8 w-full md:w-1/3"
        >
          <h6 className="text-lg font-semibold">Basic Package</h6>
          <span className="text-5xl font-bold my-4">1000</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Proceed to pay ₹1000
          </motion.button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 w-full md:w-2/3"
        >
          <h3 className="text-xl font-semibold mb-6">Service included</h3>
          <ul className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "💳",
                title: "Banking Services",
                desc: "AePS, Micro ATM, Digi Smart Transfer, Money Transfer, Bachat Khata, Digital Gold and Gold Loan",
              },
              {
                icon: "🌐",
                title: "Digital Suite",
                desc: "Customer Khata, UPI QR, SMS Payment, Aadhaar Pay and PayNearby Shopping Card",
              },
              {
                icon: "⚡",
                title: "Utility Payment centre",
                desc: "Gas, Electricity & Water Bills, Recharge Services, Credit Card Payments and Cash Collection",
              },
              {
                icon: "🛡️",
                title: "Insurance",
                desc: "Health, Life and General",
              },
              {
                icon: "✈️",
                title: "Travel",
                desc: "Rail Booking, Flight Booking and Bus Bookings",
              },
              {
                icon: "🛒",
                title: "Online Store",
                desc: "BuyNearby",
              },
              {
                icon: "🤝",
                title: "Partner Services",
                desc: "Ordering and delivery services (Amazon and Flipkart), Zee5 subscription",
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="flex flex-col"
              >
                <div className="text-blue-600 mb-2">{item.icon}</div>
                <h6 className="font-semibold">{item.title}</h6>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
      {/* 5. Contact Section */}
      <Contact />
    </div>
  );
}
