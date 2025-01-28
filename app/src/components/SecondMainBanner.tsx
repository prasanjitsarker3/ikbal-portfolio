"use client";
import { motion } from "framer-motion";
const SecondMainBanner = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[100vh] overflow-hidden "
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/Background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center bg-gradient-to-t from-gray-900 to-transparent">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1], // custom ease curve
            }}
            className="text-white text-5xl md:text-7xl 2xl:text-9xl font-bold tracking-tighter mb-6"
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
            I'm a Videographer & Photographer who specializes in capturing
            moments that tell compelling stories.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};
export default SecondMainBanner;
