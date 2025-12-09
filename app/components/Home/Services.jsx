"use client";

import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Aadhaar Banking",
      desc: "Cash withdrawal & balance enquiry via Aadhaar.",
    },
    {
      title: "Money Transfer",
      desc: "Send money instantly to any bank account.",
    },
    {
      title: "Recharge & Bills",
      desc: "Recharge mobile, DTH, and pay utility bills easily.",
    },
    {
      title: "Insurance",
      desc: "Affordable insurance & loan assistance for everyone.",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        Our Services
      </motion.h2>

      <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
        We offer a wide range of digital financial services to cater to your
        needs.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 md:px-0">
        {services.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            className="p-6 bg-white rounded-xl shadow hover:shadow-xl border border-gray-100"
          >
            <h3 className="font-semibold text-xl md:text-2xl text-blue-700 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
          </motion.div>
        ))}
      </div>
      {/* section */}
      <div className="max-w-7xl mx-auto px-4 md:px-0 mt-12 flex items-start gap-8">
        {/* left side */}
        <video
          className="w-[800px] h-[400px] rounded-lg"
          src="/video/home-option.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        >
          Your browser does not support the video tag.
        </video>

        {/* right side – Business Process & Growth Focus Areas */}
        <div className="w-full max-w-md space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Business Process & Growth Focus Areas
          </h3>

          <ul className="space-y-3 text-gray-600 text-sm leading-6">
            <li>
              <strong>Order Digitization:</strong> Streamlining the ordering
              process using digital tools for better accuracy and efficiency.
            </li>
            <li>
              <strong>Payment Disbursal:</strong> Automating and simplifying
              vendor, partner, or customer payment settlements.
            </li>
            <li>
              <strong>Product Sampling:</strong> Structured sampling to increase
              product awareness and customer trials.
            </li>
            <li>
              <strong>Self-Space Optimization:</strong> Maximizing utilization
              of store or warehouse shelf space for better visibility and sales.
            </li>
            <li>
              <strong>Cash Collection:</strong> Ensuring secure and efficient
              daily cash pickup, tracking, and reconciliation.
            </li>
            <li>
              <strong>Market Expansion:</strong> Increasing reach into new
              territories, customer segments, and distribution channels.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
