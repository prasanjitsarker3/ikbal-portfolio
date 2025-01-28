

"use client"

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div className=" flex flex-col justify-center items-center px-2 md:px-0 ">
      {/* Animated Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center py-2 md:py-12 xl:py-20 "
      >
        <h1 className=" text-3xl md:text-4xl xl:text-6xl font-bold mb-4">ABOUT ME</h1>
        <p className=" text-base md:text-lg max-w-3xl">
          Hi, I’m Alex, a passionate videographer and photographer with over 12
          years of experience behind the lens. My love for storytelling through
          visuals has taken me on an incredible journey, capturing moments,
          emotions, and stories that leave lasting impressions.
        </p>
      </motion.div>

      {/* Animated Image */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className=" mt-2 md:mt-8"
      >
        <video
        autoPlay
        loop
        muted
        playsInline
        className={` h-80 lg:h-[32rem] rounded-xl object-cover`}
      >
        <source src="/Background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </motion.div>
    </div>
  );
}
