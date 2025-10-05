"use client";
import { Eye } from "lucide-react";
import React, { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    aadhaar: "",
    pan: "",
    fulladdress: "",
  });
  const [panFile, setPanFile] = useState(null);
  const [aadhaarFile, setAadhaarFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (type === "pan") setPanFile(file);
    if (type === "aadhaar") setAadhaarFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => data.append(key, formData[key]));
      if (panFile) data.append("panfilename", panFile);
      if (aadhaarFile) data.append("aadhaarfilename", aadhaarFile);

      const res = await fetch("/api/partner", {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      if (res.ok) {
        setMessage("✅ Partner application submitted successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          aadhaar: "",
          pan: "",
          fulladdress: "",
        });
        setPanFile(null);
        setAadhaarFile(null);
      } else {
        setMessage(`❌ Error: ${result.error}`);
      }
    } catch (err) {
      setMessage(`❌ Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-indigo-50 flex items-center justify-center mt-12">
      <div className="bg-white rounded-3xl shadow-2xl p-5 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          Become a PayNearby Retailer Partner
        </h1>

        {message && (
          <div
            className={`text-center mb-6 p-3 rounded-lg ${
              message.startsWith("✅")
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-indigo-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-indigo-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Mobile
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-indigo-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Aadhaar */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Aadhaar
            </label>
            <input
              type="text"
              name="aadhaar"
              value={formData.aadhaar}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-indigo-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* PAN */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">PAN</label>
            <input
              type="text"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-indigo-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Full Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Address
            </label>
            <input
              type="text"
              name="fulladdress"
              value={formData.fulladdress}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-indigo-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* PAN File */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Upload Your PAN Card
            </label>
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              onChange={(e) => handleFileChange(e, "pan")}
              className="w-full text-gray-700 border-2 border-green-200 shadow-sm px-4 py-2 rounded-lg"
            />
            {panFile && (
              <p className="text-sm text-indigo-600 mt-1">{panFile.name}</p>
            )}
          </div>

          {/* Aadhaar File */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Upload Your Aadhaar Card
            </label>
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              onChange={(e) => handleFileChange(e, "aadhaar")}
              className="w-full text-gray-700 border-2 border-green-200 shadow-sm px-4 py-2 rounded-lg"
            />
            {aadhaarFile && (
              <p className="text-sm text-indigo-600 mt-1">{aadhaarFile.name}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
