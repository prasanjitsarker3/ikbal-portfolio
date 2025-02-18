"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  {
    id: 1,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Elegant Portrait 1",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Elegant Portrait 2",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Elegant Portrait 3",
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=800&width=600",
    alt: "Elegant Portrait 4",
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Elegant Portrait 5",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Elegant Portrait 6",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
];

export default function PhotoGallery() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className={`relative overflow-hidden rounded-lg ${photo.colSpan} ${photo.rowSpan}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src={
                "https://img.freepik.com/free-vector/abstract-blue-lights-background_1182-609.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid"
              }
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold">{photo.alt}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
