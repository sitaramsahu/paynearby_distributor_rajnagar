"use client";
import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const images = [
    "/img/gallery1.png",
    "/img/gallery2.png",
    "/img/gallery5.png",
    "/img/gallery4.png",
    "/img/gallery3.png",
    "/img/gallery6.png",
  ];
  const [selectedIndex, setSelectedIndex] = useState(null);

  const nextImage = () =>
    setSelectedIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="gallery" className="py-20 bg-cyan-600">
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        Gallery
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="cursor-pointer bg-white shadow-lg p-2 rounded-md"
            onClick={() => setSelectedIndex(i)}
          >
            <img
              src={src}
              alt={`Gallery ${i}`}
              className="w-full h-auto rounded"
            />
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Slider */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-5 right-5 text-white"
            >
              <X size={32} />
            </button>

            {/* Prev Button */}
            <button onClick={prevImage} className="absolute left-5 text-white">
              <ChevronLeft size={40} />
            </button>

            {/* Image */}
            <motion.img
              key={images[selectedIndex]}
              src={images[selectedIndex]}
              alt="Full view"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl"
            />

            {/* Next Button */}
            <button onClick={nextImage} className="absolute right-5 text-white">
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
