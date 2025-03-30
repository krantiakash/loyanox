"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Contact = () => {
  const { ref: infoRef, inView: infoInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (infoInView) {
      console.log("Contact info section is in view");
    }
  }, [infoInView]);

  return (
    <section id="contact" className="py-24 bg-gray-100 text-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-900 drop-shadow-md"
        >
          Contact Us
        </motion.h2>
        <p className="mt-2 text-lg text-gray-600">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      <div className="mt-12 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 lg:px-16">
        {/* Contact Information Cards */}
        <motion.div
          ref={infoRef}
          initial={{ opacity: 0, y: 20 }}
          animate={infoInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 flex flex-col items-center text-center"
        >
          <Phone className="text-purple-700 mb-3" size={32} />
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-gray-600">+0123 4567 8910</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={infoInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 flex flex-col items-center text-center"
        >
          <Mail className="text-purple-700 mb-3" size={32} />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-600">hello@flowbase.com</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={infoInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 flex flex-col items-center text-center"
        >
          <MapPin className="text-purple-700 mb-3" size={32} />
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <p className="text-gray-600">102 Street 2714 Don</p>
        </motion.div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-12 flex justify-center space-x-6">
        <a
          href="#"
          className="text-purple-700 hover:text-purple-900 transition-transform transform hover:scale-110"
        >
          <Twitter size={32} />
        </a>
        <a
          href="#"
          className="text-purple-700 hover:text-purple-900 transition-transform transform hover:scale-110"
        >
          <Instagram size={32} />
        </a>
        <a
          href="#"
          className="text-purple-700 hover:text-purple-900 transition-transform transform hover:scale-110"
        >
          <Linkedin size={32} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
