"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const pricingPlans = [
  {
    title: "Starter",
    price: "₹7,999", // Increased for basic plan to reflect better value
    description:
      "Perfect for individuals, freelancers, or startups who need a simple yet professional online presence.",
    features: [
      "Single Page Website (Landing Page)",
      "Responsive Design (Mobile + Tablet + Desktop)",
      "Basic On-Page SEO Setup (Meta Tags, Alt Text, Keywords)",
      "Social Media Links Integration",
      "1 Contact Form with Email Notification",
      "Hosting & Domain Setup Guidance",
      "1 Month Post-Launch Technical Support",
      "Delivery in 3–5 Business Days",
    ],
    highlighted: false,
  },
  {
    title: "Professional",
    price: "₹19,999", // Significantly higher to reflect added features and business-grade offerings
    description:
      "Ideal for small businesses or personal brands looking to expand with multiple pages, better SEO, and custom designs.",
    features: [
      "Up to 5 Custom Pages (Home, About, Services, Contact, Blog/Portfolio)",
      "Custom UI/UX Design",
      "Fully Responsive Design Across All Devices",
      "SEO Optimization (Keywords, Meta Tags, Sitemap.xml, Robots.txt)",
      "Contact Form with Google Maps Integration",
      "Performance Optimization (Speed + Image Compression)",
      "Social Media Integration",
      "3 Months Post-Launch Support",
      "Delivery in 5–7 Business Days",
    ],
    highlighted: true,
  },
  {
    title: "Enterprise",
    price: "₹49,999+", // Premium pricing for large-scale, advanced solutions
    description:
      "For growing startups, enterprises, or eCommerce businesses needing fully customized solutions and advanced features.",
    features: [
      "Unlimited Pages with Dynamic Content (Blog, Products, Case Studies)",
      "Premium Custom Design with Animations",
      "Advanced SEO (Structured Data, Technical Fixes, Keyword Strategy)",
      "Tailored Functionalities (eCommerce, Booking System, CRM Integration)",
      "CMS Integration (WordPress / Headless CMS / Custom Admin)",
      "Enhanced Security (SSL, Malware Scan, Security Plugins)",
      "Analytics & Conversion Tracking Setup (GA4, Meta Pixel, etc.)",
      "Dedicated Project Manager",
      "Priority Development & Support (6+ Months)",
      "Delivery Timeline Based on Scope (Usually 10–20 Business Days)",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  const pricingRef = useRef(null);
  const isInView = useInView(pricingRef, { once: true, margin: "-100px" });

  return (
    <section
      id="pricing"
      className="py-20 bg-white text-center md:w-4/6 mx-auto"
      ref={pricingRef}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-black"
        >
          Pricing Plans
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Affordable plans designed to fit any stage of your business.
        </motion.p>
      </div>

      <div className="mt-16 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 lg:px-16">
        {pricingPlans.map((plan, index) => {
          const isHighlight = plan.highlighted;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileHover={{ scale: 1.05 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative p-8 rounded-2xl shadow-xl transition-all duration-300 text-left border-3 transform ${
                isHighlight
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-900 border-gray-200"
              }`}
            >
              {isHighlight && (
                <div className="absolute top-0 right-0 bg-white text-black text-xs font-bold px-3 py-1 rounded-bl-xl shadow-md">
                  Most Popular
                </div>
              )}
              <h3
                className={`text-2xl font-bold ${
                  isHighlight ? "text-white" : "text-black"
                }`}
              >
                {plan.title}
              </h3>
              <p
                className={`mt-2 text-3xl font-extrabold ${
                  isHighlight ? "text-white" : "text-black"
                }`}
              >
                {plan.price}
              </p>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-center ${
                      isHighlight ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <CheckCircle
                      className={`mr-2 ${
                        isHighlight ? "text-white" : "text-black"
                      }`}
                      size={20}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-3 px-6 font-semibold rounded-xl transition duration-300 cursor-pointer ${
                  isHighlight
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-black text-white hover:bg-gray-900"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
