"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    shopname: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", shopname: "", message: "" });
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch (err) {
      setStatus("Something went wrong.");
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Contact Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-700 mb-6"
        >
          Get in touch for partnership or services.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="text"
              name="shopname"
              value={form.shopname}
              onChange={handleChange}
              placeholder="Shop Name"
              className="w-full p-3 border rounded-lg"
            />
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg"
            rows={4}
            required
          ></textarea>

          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300">
            Send Message
          </button>
        </motion.form>

        {status && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-gray-700"
          >
            {status}
          </motion.p>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-gray-600"
        >
          📍 Thana More Rajnagar, Madhubani, Bihar | 📞 +91-8298218806 | 📤
          rajucyberseva@gmail.com
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
