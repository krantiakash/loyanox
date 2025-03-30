"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Briefcase, GraduationCap } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Building modern, responsive, and scalable websites.",
    icon: <Code size={40} className="text-yellow-400" />,
  },
  {
    title: "Business Consulting",
    description: "Providing expert advice to help businesses grow and succeed.",
    icon: <Briefcase size={40} className="text-yellow-400" />,
  },
  {
    title: "Educational Content",
    description: "Creating high-quality courses and training programs.",
    icon: <GraduationCap size={40} className="text-yellow-400" />,
  },
];

const Services = () => {
  const servicesRef = useRef(null);
  const isInView = useInView(servicesRef, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="py-16 bg-white text-center"
      ref={servicesRef}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-900"
        >
          What We Offer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto"
        >
          We provide top-tier services tailored to meet your needs and help you
          succeed.
        </motion.p>
      </div>

      {/* Services List */}
      <div className="mt-12 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 lg:px-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="bg-gray-100 p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-700">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
