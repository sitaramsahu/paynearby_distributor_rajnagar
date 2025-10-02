"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#fdfbfb] to-[#ebedee] py-16 px-5">
      <div>{/* Top Footer - Currently Empty */}</div>
      <div className="max-w-[1200px] mx-auto">
        {/* Bottom Footer */}
        <div className="mt-10 border-t border-black/10 pt-5 flex flex-col md:flex-row justify-between items-center overflow-hidden">
          <motion.div
            animate={{ x: [0, 50, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="inline-block whitespace-nowrap text-left text-gray-600 mb-2 md:mb-0"
          >
            <p>
              Copyright © {new Date().getFullYear()}{" "}
              <Link href="/" className="hover:underline">
                PayNearby Distributor Rajnagar
              </Link>
              . All rights reserved.
            </p>
          </motion.div>

          <motion.div
            animate={{ x: [0, -90, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="inline-block whitespace-nowrap text-right text-gray-600"
          >
            <p>
              Developed by{" "}
              <Link
                href="https://coadies.in"
                target="_blank"
                className="hover:underline"
              >
                Coadies India
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
