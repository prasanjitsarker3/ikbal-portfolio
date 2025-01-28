"use client";

import Footer from "@/app/src/common/Footer";
import { motion } from "framer-motion";
import { Camera, Award, Mail, Instagram, Facebook } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const stats = [
    {
      title: "Years Experience",
      value: "12",
    },
    {
      title: "Events Captured",
      value: "150+",
    },
    {
      title: "Projects Completed",
      value: "500+",
    },
    {
      title: "Awards",
      value: "10",
    },
  ];

  const services = [
    {
      number: "1.",
      title: "Event Videography",
      description:
        "Capture the essence of your special moments with professional event videography, perfect for weddings, corporate events, and live performances.",
    },
    {
      number: "2.",
      title: "Promotional Videos",
      description:
        "Create dynamic promotional content that showcases your brand, products, or services, tailored to engage and inspire your target audience.",
    },
    {
      number: "3.",
      title: "Video Editing",
      description:
        "Enhance your footage with expert editing, color grading, and sound design to deliver polished and captivating final videos.",
    },
    {
      number: "4.",
      title: "Social Media Content",
      description:
        "Produce attention-grabbing videos optimized for platforms like Instagram, YouTube, and TikTok, designed to increase your online presence.",
    },
    {
      number: "5.",
      title: "Creative Consulting",
      description:
        "Receive professional guidance on storyboarding, scripting, and overall creative direction to ensure your video projects achieve their full potential.",
    },
    {
      number: "6.",
      title: "Aerial Videography",
      description:
        "Capture stunning aerial perspectives with drone videography, perfect for real estate, events, and cinematic projects that require breathtaking overhead shots.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] overflow-hidden "
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/VideoS.mp4" type="video/mp4" />
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

      {/* Introduction */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className=" px-4 py-6 md:py-12 space-y-4 lg:space-y-8"
      >
        <h1 className=" text-center text-3xl xl:text-6xl font-semibold leading-relaxed">
          Hey, I'm Alex
        </h1>
        <p className=" w-full md:max-w-3xl mx-auto text-base lg:text-xl text-center leading-relaxed">
          I believe that every project is unique and requires a tailored
          approach. I work closely with my clients to understand their vision
          and bring it to life through my lens. My style is a mix of creativity
          and technical expertise, allowing me to deliver both artistic and
          professional results.
        </p>
      </motion.section>

      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className=" px-4 py-6 md:py-12"
      >
        <div className="relative w-full md:w-[80%] mx-auto h-72 lg:h-[500px] 2xl:h-[700px]">
          <Image
            src="https://framerusercontent.com/images/Xb7TcyJ7I4QdFMfqRJNQ1iVS6k.jpg?scale-down-to=2048"
            alt="about info image"
            layout="fill"
            className="object-cover w-full rounded-xl "
          />
        </div>
      </motion.section>

      {/* Experience and Accomplishments */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className=" container px-4 md:px-8 mx-auto py-12"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-5 py-8 bg-slate-800"
            >
              <h2 className=" text-3xl md:text-4xl font-bold">{stat.value}</h2>
              <p className=" text-base md:text-lg ">{stat.title}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* My Services */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className=""
      >
        <main className="">
          <div className="  w-full container  mx-auto px-4 md:px-8 pt-8 pb-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl 2xl:text-6xl font-bold text-center mb-6 lg:mb-16"
            >
              MY SERVICES
            </motion.h1>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="group relative p-6 rounded-lg border border-white/25"
                >
                  <span className="text-2xl font-light text-gray-500 mb-2 block">
                    {service.number}
                  </span>
                  <h2 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="absolute inset-0 border border-zinc-700 rounded-lg pointer-events-none"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </main>
      </motion.section>
      <Footer />
    </div>
  );
}
