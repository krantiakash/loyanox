"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    name: "John Doe",
    designation: "CEO, TechCorp",
    review:
      "Their expertise and dedication helped us scale our business rapidly. Highly recommended!",
    logo: "/logo.png",
  },
  {
    name: "Sarah Williams",
    designation: "Founder, EduWorld",
    review:
      "Professional, innovative, and highly skilled team. Our LMS platform is now top-notch.",
    logo: "/logo.png",
  },
  {
    name: "Michael Lee",
    designation: "CTO, RealEstatePro",
    review:
      "They delivered beyond expectations. The real estate platform is seamless and efficient.",
    logo: "/logo.png",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const prevTestimonial = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const nextTestimonial = () => {
    setIndex(index === testimonials.length - 1 ? 0 : index + 1);
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-r from-indigo-50 to-white text-center"
      ref={ref}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-gray-900"
        >
          What Clients Say
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Hear from our satisfied clients who have experienced our expertise
          firsthand.
        </p>
      </div>

      {/* Testimonial Carousel */}
      <div className="mt-12 container mx-auto flex items-center justify-center px-6">
        <button
          onClick={prevTestimonial}
          className="p-4 rounded-full bg-yellow-400 text-white hover:bg-yellow-500 shadow-xl transition-all cursor-pointer"
        >
          <ChevronLeft size={32} />
        </button>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-white p-12 rounded-3xl shadow-2xl max-w-xl text-center border border-gray-300"
        >
          <img
            src={testimonials[index].logo}
            alt="Client Logo"
            className="w-24 h-24 mx-auto mb-6 rounded-full shadow-lg border-4 border-gray-200"
          />
          <p className="text-gray-700 italic text-xl leading-relaxed">
            "{testimonials[index].review}"
          </p>
          <h3 className="mt-6 text-2xl font-bold text-gray-900">
            {testimonials[index].name}
          </h3>
          <p className="text-gray-500 text-lg">
            {testimonials[index].designation}
          </p>
        </motion.div>
        <button
          onClick={nextTestimonial}
          className="p-4 rounded-full bg-yellow-400 text-white hover:bg-yellow-500 shadow-xl transition-all cursor-pointer"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
