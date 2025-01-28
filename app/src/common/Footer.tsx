"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className=" py-20 px-4">
      <div className=" w-full container mx-auto rounded-lg p-5 bg-white/10 backdrop-blur-sm">
        {/* Let's Talk Section */}
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-7xl lg:text-8xl font-bold text-center mb-16"
        >
          LET'S TALK
        </motion.h2>

        {/* Contact Information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 border-t border-white/10 pt-8"
        >
          {/* Email */}
          <Link 
            href="mailto:alex@gmail.com"
            className="group flex items-center gap-2 hover:text-white/70 transition-colors"
          >
            <span>alex@gmail.com</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>

          {/* Social Links */}
          <div className="flex gap-2 md:gap-6 text-sm">
            {[
              { name: 'Twitter', href: '#' },
              { name: 'Instagram', href: '#' },
              { name: 'TikTok', href: '#' },
              { name: 'Facebook', href: '#' },
            ].map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="hover:text-white/70 transition-colors"
              >
                {social.name}
              </Link>
            ))}
          </div>

          {/* Phone */}
          <Link 
            href="tel:(123)456789"
            className="group flex items-center gap-2 hover:text-white/70 transition-colors"
          >
            <span>(123) 456 789</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </footer>
  )
}
