"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function MainBanner() {
  return (
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
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className=" text-5xl md:text-7xl xl:text-[200px] text-white font-bold tracking-tighter mb-6"
        >
          ALEXANDER SMITH
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5, // starts after the title animation
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-white/90 text-lg md:text-xl max-w-2xl"
        >
          I'm a Videographer & Photographer who specializes in capturing moments
          that tell compelling stories.
        </motion.p>
      </div>
    </div>
  );
}
