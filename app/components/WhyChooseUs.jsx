"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const strengths = [
  {
    title: "Expertise & Experience",
    description:
      "With over a decade of industry experience, we bring expertise that ensures success.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We prioritize our clients’ needs, ensuring tailored solutions that deliver real value.",
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "We utilize the latest technologies to provide innovative and future-proof solutions.",
  },
];

const statistics = [
  { value: "100+", label: "Clients" },
  { value: "10+", label: "Years of Experience" },
  { value: "50+", label: "Successful Projects" },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="why-choose-us"
      className="py-16 bg-gray-50 text-center"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-900"
        >
          Why Choose Us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto"
        >
          Our commitment to excellence and innovation sets us apart in the
          industry.
        </motion.p>
      </div>

      {/* Key Strengths */}
      <div className="mt-12 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 lg:px-16">
        {strengths.map((strength, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
          >
            <CheckCircle size={40} className="text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">
              {strength.title}
            </h3>
            <p className="mt-2 text-gray-700">{strength.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Statistics */}
      <div className="mt-16 container mx-auto flex flex-wrap justify-center gap-8 px-6">
        {statistics.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-yellow-500 text-white py-6 px-10 rounded-lg shadow-md text-center"
          >
            <h3 className="text-4xl font-bold">{stat.value}</h3>
            <p className="mt-2 text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
