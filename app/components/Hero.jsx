"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Empowering Businesses with{" "}
          <span className="text-yellow-400">Innovation & Excellence</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          We provide top-notch services & educational content to help you grow.
        </p>
        <Link
          href="#contact"
          className="mt-6 inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-500 transition duration-300"
        >
          Get in Touch
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
