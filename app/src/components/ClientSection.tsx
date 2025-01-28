"use client";

import { motion } from "framer-motion";

interface Client {
  id: number;
  name: string;
  logo: string;
  video: string;
}

const clients: Client[] = [
  {
    id: 1,
    name: "Client 1",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-01-24%2018-55-52-8X1ZgB8OAp0TMtbGOouuwug80vaeWn.png",
    video: "/VideoS.mp4",
  },
  {
    id: 2,
    name: "Client 2",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-01-24%2018-55-52-8X1ZgB8OAp0TMtbGOouuwug80vaeWn.png",
    video: "/VideoS.mp4",
  },
  {
    id: 3,
    name: "Client 3",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-01-24%2018-55-52-8X1ZgB8OAp0TMtbGOouuwug80vaeWn.png",
    video: "/VideoS.mp4",
  },
  {
    id: 4,
    name: "Client 4",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-01-24%2018-55-52-8X1ZgB8OAp0TMtbGOouuwug80vaeWn.png",
    video: "/VideoS.mp4",
  },
  {
    id: 5,
    name: "Client 5",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-01-24%2018-55-52-8X1ZgB8OAp0TMtbGOouuwug80vaeWn.png",
    video: "/VideoS.mp4",
  },
  {
    id: 6,
    name: "Client 6",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-01-24%2018-55-52-8X1ZgB8OAp0TMtbGOouuwug80vaeWn.png",
    video: "/VideoS.mp4",
  },
];

export default function ClientsSection() {
  return (
    <section className=" py-2 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white text-3xl md:text-5xl xl:text-6xl font-bold text-center mb-16"
        >
          MY CLIENTS
        </motion.h1>

        {/* Client Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="relative aspect-video rounded-lg overflow-hidden shadow-lg group"
            >
              {/* Video Element */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <source src={client.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Black Overlay Effect */}
              <div className="absolute inset-0 bg-black/50 opacity-20 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>

              {/* Glassmorphic Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-white/5 backdrop-blur-sm z-20 transition-opacity duration-300 group-hover:opacity-0">
                <motion.h1
                  className="text-4xl font-bold text-white"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  {client.name}
                </motion.h1>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
