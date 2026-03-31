import React from "react";
import { FaFileAlt, FaHandHoldingUsd, FaGraduationCap, FaHome } from "react-icons/fa";

type Activity = {
  icon: React.ReactNode;
  subtitle: string;
  title: string;
};

const activities: Activity[] = [
  {
    icon: <FaFileAlt size={22} />,
    subtitle: "Application Status",
    title: "Check Your Grant Status",
  },
  {
    icon: <FaHandHoldingUsd size={22} />,
    subtitle: "Available Grants",
    title: "Explore Funding Opportunities",
  },
  {
    icon: <FaGraduationCap size={22} />,
    subtitle: "Education Assistance",
    title: "Find Scholarships & Grants",
  },
  {
    icon: <FaHome size={22} />,
    subtitle: "Housing Relief",
    title: "Apply for Housing Assistance",
  },
];

const ActivitiesSection: React.FC = () => {
  return (
    <section className="bg-[#f9f9fb] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-200 rounded-2xl overflow-hidden bg-white">

          {activities.map((item, index) => (
            <div
              key={index}
              className={`p-8 flex flex-col gap-3 transition duration-300 
              ${index !== activities.length - 1 ? "border-b lg:border-b-0 lg:border-r border-gray-200" : ""}`}
            >
              
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#bf126e]/10 text-[#bf126e]">
                {item.icon}
              </div>

              {/* Subtitle */}
              <h6 className="text-xs tracking-wide uppercase text-gray-400">
                {item.subtitle}
              </h6>

              {/* Title */}
              <h4 className="text-base font-semibold text-gray-800 leading-snug">
                {item.title}
              </h4>

              {/* Accent line */}
              <div className="w-8 h-[2px] bg-[#bf126e] mt-2 transition-all duration-300 group-hover:w-12" />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ActivitiesSection;