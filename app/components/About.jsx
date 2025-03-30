"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-24 bg-gray-100 relative overflow-hidden"
      ref={aboutRef}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl font-extrabold text-gray-900"
        >
          Who We Are
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
        >
          We are a forward-thinking company dedicated to providing innovative
          solutions and educational content to help businesses grow and thrive
          in a rapidly evolving world.
        </motion.p>
      </div>

      <div className="mt-16 container mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-16 px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:w-1/2 text-center md:text-left space-y-10"
        >
          <div className="bg-white p-6 rounded-xl shadow-xl border-l-4 border-yellow-500">
            <h3 className="text-3xl font-bold text-gray-800">Our Mission</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              To empower businesses with top-notch services and insightful
              education that drives success through creativity and technology.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-xl border-l-4 border-yellow-500">
            <h3 className="text-3xl font-bold text-gray-800">Our Vision</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              To be the leading provider of innovative solutions that transform
              industries and create a sustainable future, making a global
              impact.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:w-1/2 mt-12 md:mt-0 relative"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/team.avif"
              alt="Our Team"
              width={711}
              height={350}
              className="rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
