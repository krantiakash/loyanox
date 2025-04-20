"use client";

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
    id: 1,
    name: "HTML",
    icon: <FaHtml5 size={50} className="text-orange-500" />,
    description:
      "The foundational technologies for building and styling web pages.",
  },
  {
    id: 2,
    name: "CSS",
    icon: <FaCss3Alt size={50} className="text-blue-500" />,
    description:
      "A language for styling HTML and XML documents, controlling layout and design.",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: <FaJsSquare size={50} className="text-yellow-500" />,
    description:
      "A versatile scripting language used for both frontend and backend development.",
  },
  {
    id: 4,
    name: "React",
    icon: <FaReact size={50} className="text-blue-500" />,
    description: "A powerful JavaScript library for building user interfaces.",
  },
  {
    id: 5,
    name: "Next.js",
    icon: <SiNextdotjs size={50} className="text-black" />,
    description:
      "A React framework for production-ready applications with SEO optimization.",
  },
  {
    id: 6,
    name: "Node.js",
    icon: <FaNodeJs size={50} className="text-green-500" />,
    description: "A JavaScript runtime for scalable backend applications.",
  },
  {
    id: 7,
    name: "MySQL",
    icon: <FaDatabase size={50} className="text-blue-700" />,
    description: "A robust and reliable relational database system.",
  },
  {
    id: 8,
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={50} className="text-cyan-500" />,
    description: "A utility-first CSS framework for modern designs.",
  },
  {
    id: 9,
    name: "PHP",
    icon: <FaPhp size={50} className="text-blue-600" />,
    description:
      "A server-side scripting language designed for web development.",
  },
  {
    id: 10,
    name: "MongoDB",
    icon: <SiMongodb size={50} className="text-green-600" />,
    description: "A NoSQL database known for its scalability and flexibility.",
  },
  // Added cybersecurity-related technologies with react-icons
  {
    id: 11,
    name: "OWASP",
    icon: <SiOwasp size={50} className="text-red-500" />, // Using a shield icon
    description:
      "A global community focused on improving the security of software. OWASP provides open-source tools for secure coding practices.",
  },
  {
    id: 12,
    name: "PortSwigger",
    icon: <SiPortswigger size={50} className="text-orange-600" />, // Using a shield icon
    description:
      "A leader in web security with tools like Burp Suite, designed for penetration testing and vulnerability scanning.",
  },
  {
    id: 13,
    name: "Metasploit",
    icon: <SiMetasploit size={50} className="text-blue-600" />, // Similar to #1165b0
    description:
      "A powerful penetration testing framework used to identify and exploit vulnerabilities in software and networks.",
  },
  {
    id: 14,
    name: "Kali Linux",
    icon: <SiKalilinux size={50} className="text-blue-600" />, // Similar to #2673f7
    description:
      "A Debian-based Linux distribution designed for advanced penetration testing and security auditing, used by security professionals and ethical hackers.",
  },
  {
    id: 15,
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
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-5xl font-extrabold text-gray-900">
          Technologies We Use
        </h2>
      </div>

      {/* Tech Stack Grid */}
      <div className="mt-12 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6 md:px-12 lg:px-16">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl text-center flex flex-col items-center hover:shadow-2xl transition-all duration-300 border border-gray-200"
          >
            <div className="mb-4 bg-gray-100 p-4 rounded-full shadow-md">
              {tech.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{tech.name}</h3>
            <p className="mt-2 text-gray-600 text-sm">{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
