"use client";
import Footer from "@/app/src/common/Footer";
import MainVideoSection from "@/app/src/components/MainVideoSection";
import { motion } from "framer-motion";

const VideoPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className=" h-60  md:h-96">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[100vh] w-full overflow-hidden object-cover "
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover "
          >
            <source src="/VideoBanner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent">
            <div className="h-full flex justify-center items-center">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-3xl xl:text-6xl text-center font-bold p-8"
              >
                Your Vision, My Lens
              </motion.h1>
            </div>
          </div>
        </motion.div>
      </div>
      <MainVideoSection />
      <Footer />
    </div>
  );
};
export default VideoPage;
