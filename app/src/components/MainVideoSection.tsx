"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Video {
  id: string;
  title: string;
  category: string;
  year: number;
  videoUrl: string;
}

const MainVideoSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newIndex = Math.round(scrollPosition / windowHeight);

      if (newIndex !== activeIndex) {
        // Pause all videos
        videoRefs.current.forEach((videoRef, idx) => {
          if (videoRef) {
            if (idx === newIndex) {
              videoRef.play();
            } else {
              videoRef.pause();
            }
          }
        });
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  useEffect(() => {
    if (videoRefs.current[0]) {
      videoRefs.current[0].play();
    }
  }, []);

  return (
    <div className=" w-[98%] md:w-[80%] mx-auto py-0 md:py-12">
      <div ref={containerRef} className="relative w-full">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            className=" h-72 md:h-[80vh] w-full sticky top-0 rounded-xl"
            animate={{
              transition: { duration: 0.8 },
            }}
          >
            <video
              //@ts-ignore
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.videoUrl}
              className="w-full h-full object-cover rounded-xl"
              loop
              muted
              playsInline
            />
            <motion.div
              className="absolute inset-0 bg-black/30"
              initial={{ opacity: 0 }}
              animate={{
                transition: { duration: 0.8 },
              }}
            />
            <motion.div
              className="absolute inset-0 flex flex-col justify-center items-center text-white"
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: activeIndex === index ? 0 : 50,
                opacity: activeIndex === index ? 1 : 0,
                transition: { duration: 0.8, delay: 0.2 },
              }}
            >
              <h2 className=" text-2xl lg:text-5xl text-center font-bold mb-2 md:mb-4">{video.title}</h2>
              <div className="flex items-center gap-4">
                <span className="text-sm bg-white/20 px-4 py-2 rounded-full">
                  {video.category}
                </span>
                <span className="text-sm">{video.year}</span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MainVideoSection;
