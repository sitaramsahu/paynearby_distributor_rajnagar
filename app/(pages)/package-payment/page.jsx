"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Router } from "next/router";
import Link from "next/link";

export default function PackagePaymentPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    panNo: "",
    aadhaarNo: "",
    gender: "",
    storeName: "",
    referenceNo: "",
    screenshot: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleNextStep = () => {
    if (!formData.name) {
      alert("Please enter your name.");
      return;
    }
    if (!formData.mobile) {
      alert("Please enter your mobile number.");
      return;
    }
    if (!formData.panNo) {
      alert("Please enter your PAN number.");
      return;
    }
    if (!formData.aadhaarNo) {
      alert("Please enter your Aadhaar number.");
      return;
    }
    if (!formData.gender) {
      alert("Please select your gender.");
      return;
    }

    setStep(2);
  };
  const handleHome = () => {
    window.history.back();
  };
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (!formData.referenceNo) {
      alert("Please enter the reference number.");
      return;
    }
    if (!formData.screenshot) {
      alert("Please upload the payment screenshot.");
      return;
    }

    setLoading(true);

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    const res = await fetch("/api/package-payment", {
      method: "POST",
      body: data,
    });

    const result = await res.json();
    setLoading(false);

    if (result.success) {
      alert("Payment submitted successfully ✅");
      setStep(1);
    } else {
      alert("Error: " + result.error);
    }
    if (result.success) {
      Router.push("/gallery");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-indigo-50 flex items-center justify-center mt-12">
      <div className="bg-white rounded-3xl shadow-2xl p-5 w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4">Package Payment</h1>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4 }}
            >
              <form
                onSubmit={(e) => e.preventDefault()}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 rounded-lg border border-indigo-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Mobile
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    className="w-full px-4 py-2 rounded-lg border border-indigo-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium b-1">
                    PAN Number
                  </label>
                  <input
                    type="text"
                    name="panNo"
                    className="w-full px-4 py-2 rounded-lg border border-indigo-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium b-1">
                    Aadhaar Number
                  </label>
                  <input
                    type="text"
                    name="aadhaarNo"
                    className="w-full px-4 py-2 rounded-lg border border-indigo-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium b-1">
                    Gender
                  </label>
                  <select
                    name="gender"
                    className="w-full px-4 py-3 rounded-lg border border-indigo-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Shop Name
                  </label>
                  <input
                    type="text"
                    name="storeName"
                    className="w-full px-4 py-2 rounded-lg border border-indigo-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    onChange={handleChange}
                  />
                </div>
                <div className="gap-6 block md:flex md:gap-12">
                  <button
                    type="button"
                    onClick={handleHome}
                    className="bg-gray-600 w-1/2 text-gray-100 py-2 p-2 rounded-2xl hover:bg-blue-500"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-blue-600 w-1/2 text-white px-4 py-2 rounded-2xl hover:bg-blue-900"
                  >
                    Proceed →
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <form
                onSubmit={handleSubmit}
                className="w-full items-center justify-center md:ml-40"
              >
                {/* Scanner */}
                <p className="font-extrabold text-xl ml-40 md:ml-45">
                  Scan & Pay
                </p>
                <img
                  src="/Slice_Bank_Qr.jpg"
                  alt="Payment QR"
                  className="w-60 md:ml-30 ml-25"
                />
                {/* Payment Reference No. */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Reference No
                  </label>
                  <input
                    type="text"
                    name="referenceNo"
                    className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-indigo-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                    onChange={handleChange}
                  />
                </div>
                {/* Payment Screenshot */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Upload Your PAN Card
                  </label>
                  <input
                    type="file"
                    name="screenshot"
                    accept="image/*"
                    className="w-full md:w-1/2 text-gray-700 border-2 border-green-200 shadow-sm px-4 py-2 rounded-lg mb-2"
                    onChange={handleChange}
                  />
                </div>
                {/* Agree CheckBox */}
                <div className="flex gap-1">
                  <input
                    type="checkbox"
                    name="tnc"
                    className="-mt-1"
                    onChange={handleChange}
                  />
                  <label className="block text-green-700 text-sm font-medium  hover:text-blue-700">
                    <Link href="/tnc">Agree (Terms & Condition)</Link>
                  </label>
                </div>
                <div className="flex gap-4 md:ml-30">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-800"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`px-4 py-2 rounded text-white hover:bg-green-800 ${
                      loading ? "bg-gray-500" : "bg-green-600"
                    }`}
                  >
                    {loading ? "Submitting..." : "Submit "}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
