"use client";
import Footer from "@/app/src/common/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ContactPage = () => {
  const socialLinks = [
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "TikTik", href: "#" },
    { name: "Facebook", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[50vh] overflow-hidden "
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
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent text-white">
          <div className="h-full flex justify-center items-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className=" text-3xl md:text-5xl xl:text-6xl font-bold tracking-tighter"
            >
              I’m Just a Click Away
            </motion.h1>
          </div>
        </div>
      </motion.div>

      <div className=" w-full container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" mx-auto space-y-12"
        >
          {/* Contact Info */}
          <div className="flex justify-center space-x-2 md:space-x-8 pt-4 md:pt-0 ">
            <a
              href="mailto:alex@gmail.com"
              className="flex items-center hover:text-white transition-colors"
            >
              alex@gmail.com
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
            <a
              href="tel:(123)456789"
              className="flex items-center hover:text-white transition-colors"
            >
              (123) 456 789
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          {/* Social Links */}
          <div className=" w-full md:max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className=" flex flex-wrap items-center justify-center gap-4"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center py-3 px-2 md:px-4 rounded-lg bg-slate-700"
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Project Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-8 max-w-4xl mx-auto pt-16 pb-24"
          >
            <h1 className="text-3xl md:text-4xl font-medium  md:font-bold text-center">PROJECT INQUIRY</h1>

            <form className="space-y-6">
              <div className="space-y-2 flex flex-col">
                <label htmlFor="name" className="text-lg text-white">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jane Smith"
                  className=" py-4 px-6 border border-white/20 bg-slate-700 text-white placeholder:text-white rounded-xl"
                />
              </div>

              <div className="space-y-2 flex flex-col">
                <label htmlFor="email" className="text-lg text-white">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="exam@gmail.com"
                  className=" py-4 px-6 border border-white/20 bg-slate-700 text-white placeholder:text-white rounded-xl"
                />
              </div>

              <div className="space-y-2 flex flex-col">
                <label htmlFor="details" className=" text-lg text-white">
                  Project Details
                </label>
                <textarea
                  id="details"
                  placeholder="Document an event..."
                  rows={4}
                  className="py-4 px-6 border border-white/20 bg-slate-700 text-white placeholder:text-white rounded-xl"
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="submit"
                  className="w-full py-3 text-center border border-white rounded-full bg-slate-700"
                >
                  Send Inquiry
                </button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactPage;
