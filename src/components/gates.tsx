import React from "react";
import { FaHeartbeat, FaSchool, FaBriefcase, FaGlobe, FaLightbulb, FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const topics = [
  {
    title: "Global Health",
    description: "Funding initiatives to improve healthcare access and fight diseases worldwide.",
    icon: <FaHeartbeat className="text-red-500 w-10 h-10" />,
  },
  {
    title: "Education",
    description: "Supporting education programs for children and young adults globally.",
    icon: <FaSchool className="text-blue-500 w-10 h-10" />,
  },
  {
    title: "Economic Empowerment",
    description: "Programs to promote entrepreneurship, small business support, and financial literacy.",
    icon: <FaBriefcase className="text-green-500 w-10 h-10" />,
  },
  {
    title: "Global Development",
    description: "Funding projects to improve infrastructure, agriculture, and sustainable communities.",
    icon: <FaGlobe className="text-yellow-500 w-10 h-10" />,
  },
  {
    title: "Innovation & Technology",
    description: "Supporting research and technology innovations for social impact.",
    icon: <FaLightbulb className="text-purple-500 w-10 h-10" />,
  },
  {
    title: "Community Services",
    description: "Programs for humanitarian aid, disaster response, and local community support.",
    icon: <FaHandsHelping className="text-pink-500 w-10 h-10" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const GatesTopicsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-xl uppercase font-semibold mb-8 text-center text-gray-800">
          Bill & Melinda Gates Foundation Programs
        </h1>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, index) => (
            <motion.li
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col items-start"
            >
                <Link to={'/info'} className="flex flex-col w-full h-full">
                    <div className="mb-4">{topic.icon}</div>
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{topic.title}</h2>
                <p className="text-gray-600 mb-4 text-sm">{topic.description}</p>
                <span className="mt-auto text-blue-700 hover:underline font-medium text-sm">
                  Learn More →
                </span>
                
                </Link>
         
         
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GatesTopicsPage;