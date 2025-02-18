"use client";
import React from "react";
import { motion } from "framer-motion";

const PhotoViewBanner = () => {
  return (
    <div>
      <div className="relative h-[100vh] w-full overflow-hidden bg-gray-800">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-1000`}
        >
          <source src="/Background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center bg-gradient-to-t from-gray-900 to-transparent">
          <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              ELEGANT MOMENTS
            </motion.h1>

            <motion.p
              className="max-w-3xl text-lg md:text-xl text-gray-400 mb-24"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              A series of studio portraits focusing on natural light and
              minimalistic backdrops. The project showcases a range of emotional
              expressions and creative lighting techniques, highlighting the
              subject's personality through intimate close-ups.
            </motion.p>

            {/* Project Details Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="space-y-2 border border-white/50 text-white p-3">
                <h2 className="text-sm uppercase tracking-wider ">Category</h2>
                <p className="text-lg">Portrait Photography</p>
              </div>

              <div className="space-y-2 border border-white/50 text-white p-3">
                <h2 className="text-sm uppercase tracking-wider">Client</h2>
                <p className="text-lg">Private Client</p>
              </div>

              <div className="space-y-2 border border-white/50 text-white p-3">
                <h2 className="text-sm uppercase tracking-wider ">Location</h2>
                <p className="text-lg">Studio, New York</p>
              </div>

              <div className="space-y-2 border border-white/50 text-white p-3">
                <h2 className="text-sm uppercase tracking-wider ">Year</h2>
                <p className="text-lg">2024</p>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PhotoViewBanner;
