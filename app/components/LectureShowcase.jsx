"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const lectures = [
  {
    title: "Guest Lecture",
    description: "Guest lectures at the college by our trained instructors.",
    image: "/lec1.jpeg",
  },
  {
    title: "Guest Lecture",
    description: "Guest lectures at the college by our trained instructors.",
    image: "/lec2.jpeg",
  },
  {
    title: "Guest Lecture",
    description: "Guest lectures at the college by our trained instructors.",
    image: "/lec3.jpeg",
  },
];

const LectureShowcase = () => {
  return (
    <section id="lectures" className="py-16 bg-gray-50 text-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-900"
        >
          Corporate Training
        </motion.h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Discover our curated lectures that will empower you with the knowledge
          you need.
        </p>
      </div>

      {/* Lecture Gallery */}
      <div className="mt-12 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-12 lg:px-16">
        {lectures.map((lecture, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative group overflow-hidden rounded-lg shadow-xl cursor-pointer bg-white transition-all duration-300 transform hover:scale-105"
          >
            <Image
              src={lecture.image}
              alt={lecture.title}
              width={500}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <div className="text-white text-center px-4">
                <h3 className="text-xl font-semibold">{lecture.title}</h3>
                <p className="mt-2 text-sm">{lecture.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LectureShowcase;
