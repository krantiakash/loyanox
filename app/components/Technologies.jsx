"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMetasploit,
  SiPortswigger,
  SiOwasp,
  SiWireshark,
  SiKalilinux,
} from "react-icons/si";
import { useInView } from "react-intersection-observer";

const technologies = [
  {
    name: "HTML",
    icon: <FaHtml5 size={50} className="text-orange-500" />,
    description:
      "The foundational technologies for building and styling web pages.",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={50} className="text-blue-500" />,
    description:
      "A language for styling HTML and XML documents, controlling layout and design.",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare size={50} className="text-yellow-500" />,
    description:
      "A versatile scripting language used for both frontend and backend development.",
  },
  {
    name: "React",
    icon: <FaReact size={50} className="text-blue-500" />,
    description: "A powerful JavaScript library for building user interfaces.",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={50} className="text-black" />,
    description:
      "A React framework for production-ready applications with SEO optimization.",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={50} className="text-green-500" />,
    description: "A JavaScript runtime for scalable backend applications.",
  },
  {
    name: "MySQL",
    icon: <FaDatabase size={50} className="text-blue-700" />,
    description: "A robust and reliable relational database system.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={50} className="text-cyan-500" />,
    description: "A utility-first CSS framework for modern designs.",
  },

  {
    name: "PHP",
    icon: <FaPhp size={50} className="text-blue-600" />,
    description:
      "A server-side scripting language designed for web development.",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={50} className="text-green-600" />,
    description: "A NoSQL database known for its scalability and flexibility.",
  },
  // Added cybersecurity-related technologies with react-icons
  {
    name: "OWASP",
    icon: <SiOwasp size={50} className="text-red-500" />, // Using a shield icon
    description:
      "A global community focused on improving the security of software. OWASP provides open-source tools for secure coding practices.",
  },
  {
    name: "PortSwigger",
    icon: <SiPortswigger size={50} className="text-orange-600" />, // Using a shield icon
    description:
      "A leader in web security with tools like Burp Suite, designed for penetration testing and vulnerability scanning.",
  },
  {
    name: "Metasploit",
    icon: <SiMetasploit size={50} className="text-blue-600" />, // Similar to #1165b0
    description:
      "A powerful penetration testing framework used to identify and exploit vulnerabilities in software and networks.",
  },
  {
    name: "Kali Linux",
    icon: <SiKalilinux size={50} className="text-blue-600" />, // Similar to #2673f7
    description:
      "A Debian-based Linux distribution designed for advanced penetration testing and security auditing, used by security professionals and ethical hackers.",
  },
  {
    name: "Wireshark",
    icon: <SiWireshark size={50} className="text-cyan-500" />,
    description:
      "A network protocol analyzer used for capturing and analyzing network traffic, often used for troubleshooting and security analysis.",
  },
];

const Technologies = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="technologies"
      className="py-20 bg-gradient-to-br from-gray-50 to-white text-center"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 md:px-12 lg:px-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-gray-900"
        >
          Technologies We Use
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We leverage the latest technologies to deliver high-quality and
          scalable solutions.
        </p>
      </motion.div>

      {/* Tech Stack Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-12 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6 md:px-12 lg:px-16"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl text-center flex flex-col items-center hover:shadow-2xl transition-all duration-300 border border-gray-200"
          >
            <motion.div
              initial={{ rotate: -10 }}
              animate={inView ? { rotate: 0 } : {}}
              transition={{ duration: 0.5, type: "spring" }}
              className="mb-4 bg-gray-100 p-4 rounded-full shadow-md"
            >
              {tech.icon}
            </motion.div>
            <h3 className="text-lg font-semibold text-gray-900">{tech.name}</h3>
            <p className="mt-2 text-gray-600 text-sm">{tech.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
