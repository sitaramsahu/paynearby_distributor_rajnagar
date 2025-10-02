"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 md:px-0">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            We are the official{" "}
            <span className="font-semibold text-blue-700">
              PayNearby distributor
            </span>{" "}
            in Rajnagar, providing digital financial services to retailers and
            customers. Our goal is to make banking and payments{" "}
            <span className="font-semibold text-green-600">
              easy for everyone
            </span>
            .
          </p>
        </motion.div>

        {/* Right: Map */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          {/* Google Maps iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.816584599732!2d86.16031657497784!3d26.39711267695826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec2d0c487b864b%3A0x5600c114ae5857e0!2sRaju%20Cyber%20Seva!5e0!3m2!1sen!2sin!4v1759381028889!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-64 md:h-80"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
