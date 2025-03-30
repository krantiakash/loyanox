"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A scalable and modern e-commerce website with seamless checkout.",
    image: "/team.avif",
  },
  {
    title: "Real Estate Portal",
    description: "An advanced property listing platform with interactive maps.",
    image: "/team.avif",
  },
  {
    title: "Learning Management System",
    description: "An intuitive e-learning platform with gamification features.",
    image: "/team.avif",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A scalable and modern e-commerce website with seamless checkout.",
    image: "/team.avif",
  },
  {
    title: "Real Estate Portal",
    description: "An advanced property listing platform with interactive maps.",
    image: "/team.avif",
  },
  {
    title: "Learning Management System",
    description: "An intuitive e-learning platform with gamification features.",
    image: "/team.avif",
  },
];

const Portfolio = () => {
  const [selected, setSelected] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="portfolio"
      className="py-24 bg-gradient-to-br from-gray-100 to-gray-50 text-center"
      ref={ref}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-gray-900"
        >
          Our Work
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Explore some of our successful projects that have made a difference.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="mt-12 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-12 lg:px-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative group overflow-hidden rounded-3xl shadow-2xl cursor-pointer transform transition-all hover:scale-105 hover:shadow-3xl"
            onClick={() => setSelected(index)}
          >
            <div className="relative w-full h-72">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-3xl transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 rounded-b-3xl">
              <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                {project.title}
              </h3>
              <p className="mt-3 text-base text-gray-300">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
