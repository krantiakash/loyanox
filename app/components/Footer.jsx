"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 text-center lg:text-left">
        {/* About Us */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold text-yellow-400">About Us</h3>
          <p className="text-gray-400 text-sm">
            We are a company dedicated to providing top-notch services, ensuring
            customer satisfaction and quality experience.
          </p>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center lg:items-start space-y-4"
        >
          <h3 className="text-xl font-semibold text-yellow-400">Follow Us</h3>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/company/loyanox/"
              className="text-white hover:text-yellow-400 transition duration-300"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://www.instagram.com/loyanox_official/"
              className="text-white hover:text-yellow-400 transition duration-300"
            >
              <Instagram size={28} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 flex justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm text-gray-400"
          >
            <p>
              &copy; {new Date().getFullYear()} LoyaNox. All Rights
              Reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
