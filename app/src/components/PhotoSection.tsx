"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Photo {
  id: number;
  title: string;
  category: string;
  year: number;
  img: string;
}

const photos: Photo[] = [
  {
    id: 1,
    title: "Elegant Moments",
    category: "Portrait Photography",
    year: 2024,
    img: "https://framerusercontent.com/images/o3iOP5RI3LnJ53dJ9dJK15dz8.jpg?scale-down-to=1024",
  },
  {
    id: 2,
    title: "Big Day",
    category: "Event Photogrpy",
    year: 2023,
    img: "https://framerusercontent.com/images/dpy2UYG1NGEov29AhaW50aetU.jpg?scale-down-to=1024",
  },
  {
    id: 3,
    title: "Timeless Elegance",
    category: "Fashion Photography",
    year: 2024,
    img: "https://framerusercontent.com/images/Wtru6qBkNIYmYd3GPHoiqF4b0Ls.jpg?scale-down-to=1024",
  },
  {
    id: 4,
    title: "Monochrome Emotion",
    category: "Black & White",
    year: 2023,
    img: "https://framerusercontent.com/images/dqHt6afep2NwFrChSSG2K1XnmyA.jpg?scale-down-to=1024",
  },
];

export default function PhotoSection() {
  const router = useRouter();

  const handleViewPhoto = (id: number) => {
    router.push(`/photos/${id}`);
  };
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white text-4xl lg:text-5xl 2xl:text-6xl font-bold text-center mb-16"
        >
          Photos
        </motion.h1>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              onClick={() => handleViewPhoto(photo.id)}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Video Element */}
              <Image
                src={photo.img}
                alt="Photo"
                width={500}
                height={500}
                className="w-full h-72 lg:h-[20rem] 2xl:h-[32rem] object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Video Information */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white transition-opacity duration-500">
                <h3 className="text-2xl font-bold mb-2">{photo.title}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-white/80">{photo.category}</p>
                  <p className="text-white/60">{photo.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
