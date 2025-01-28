"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Video {
  id: string;
  title: string;
  category: string;
  year: number;
  videoUrl: string;
}

const videos: Video[] = [
  {
    id: "1",
    title: "A Nighttime Journey",
    category: "Urban Videography",
    year: 2024,
    videoUrl: "/VideoF.mp4",
  },
  {
    id: "2",
    title: "Twilight Dance",
    category: "Art Film",
    year: 2023,
    videoUrl: "/VideoS.mp4",
  },
  {
    id: "3",
    title: "A Nighttime Journey",
    category: "Urban Videography",
    year: 2024,
    videoUrl: "/VideoF.mp4",
  },
  {
    id: "4",
    title: "Twilight Dance",
    category: "Art Film",
    year: 2023,
    videoUrl: "/VideoS.mp4",
  },
];

export default function VideoSection() {
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const handleMouseEnter = (index: number) => {
    videoRefs.current[index]?.play();
  };

  const handleMouseLeave = (index: number) => {
    videoRefs.current[index]?.pause();
    videoRefs.current[index].currentTime = 0;
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
          className="text-white text-5xl md:text-6xl font-bold text-center mb-16"
        >
          VIDEOS
        </motion.h1>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="relative group overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Video Element */}
              <video
                ref={(el) => {
                  if (el) {
                    videoRefs.current[index] = el;
                  }
                }}
                loop
                muted
                playsInline
                className="w-full h-72 lg:h-[26rem] 2xl:h-[32rem] object-cover group-hover:scale-110 transition-transform duration-500"
              >
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Play Icon */}
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className=" h-16 w-16 flex justify-center items-center bg-white bg-opacity-35 rounded-full cursor-pointer ">
                  <div className=" h-12 w-12 flex justify-center items-center bg-white bg-opacity-40 rounded-full">
                    <ArrowUpRight size={25} className=" text-white" />
                  </div>
                </div>
              </div>

              {/* Video Information */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white transition-opacity duration-500">
                <h3 className="text-2xl font-bold mb-2">{video.title}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-white/80">{video.category}</p>
                  <p className="text-white/60">{video.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
