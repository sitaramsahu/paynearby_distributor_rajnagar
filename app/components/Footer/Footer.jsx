"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Github,
  Settings2Icon,
  MoveUpRightIcon,
  ArrowRightCircle,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/sitaramsahu.8472/",
      label: "Facebook",
    },
    { icon: Twitter, href: "https://x.com/sitaram84723511", label: "Twitter" },
    {
      icon: Instagram,
      href: "https://instagram.com/sitaram84723511",
      label: "Instagram",
    },
    { icon: Github, href: "https://sitaramsahu.github.io/", label: "GitHub" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
  ];

  const services = [
    { name: "AEPS Services", href: "/services" },
    { name: "CSC Services", href: "/services" },
    { name: "GST Registration", href: "/services" },
    { name: "Retailer Registration", href: "/services" },
  ];

  return (
    <footer className="bg-gradient-to-r from-white via-sky-300 to-blue-300  border-t border-border ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/logo-navbar.png"
                alt="PayNearby Distributor Rajnagar"
                className="w-60"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              PayNearby Distributor, Provide AEPS Retailer ID with Full Guide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-gradient-to-r from-gray-500 to-green-400 hover:bg-blue-700 hover:text-red-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <span className="text-lg font-semibold">Quick Links</span>
            <p className=" text-green-900 border-t border-border"></p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:underline hover:text-green-700 transition-colors text-sm md:text-xl"
                  >
                    <div className="flex gap-2">
                      <ArrowRightCircle /> {link.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <span className="text-lg font-semibold ">Services</span>
            <ul className="space-y-2">
              <p className=" text-green-900 border-t border-border"></p>
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-700 hover:underline hover:text-blue-700 transition-colors text-sm md:text-xl"
                  >
                    <div className="flex gap-2">
                      <ArrowRightCircle /> {service.name}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <span className="text-lg font-semibold">Contact Info</span>
            <p className=" text-green-900 border-t border-border"></p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  rajucyberseva@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  +91 8298218806
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  Thana More, Rajnagar <br />
                  Madhubani, Bihar, India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MoveUpRightIcon className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  sitaramsahurajnagar@slc
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t border-border  pt-5 flex flex-col md:flex-row justify-between items-center overflow-hidden">
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
