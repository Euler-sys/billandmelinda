import React from "react";

// ✅ Import images
import img1 from "../assets/one.jpg";
import img2 from "../assets/two.jpg";
import img3 from "../assets/thr.jpg";
import img4 from "../assets/fou.jpg";
import img5 from "../assets/fiv.jpg";
import img6 from "../assets/six.jpg";

type ExploreItem = {
  title: string;
  description: string;
  image: string;
};

const items: ExploreItem[] = [
  {
    title: "Housing Support",
    description:
      "Get help finding affordable housing options for individuals and families.",
    image: img1,
  },
  {
    title: "Food Support",
    description:
      "Access nutrition programs and find nearby food assistance resources.",
    image: img2,
  },
  {
    title: "Financial Assistance",
    description:
      "Apply for emergency financial aid and support services.",
    image: img3,
  },
  {
    title: "Personal Assistant Program",
    description:
      "Get assistance with personal tasks and day-to-day management.",
    image: img4,
  },
  {
    title: "Business Grant",
    description:
      "Apply for funding to support your business growth and expansion.",
    image: img5,
  },
  {
    title: "Home Improvement",
    description:
      "Receive support to enhance your home’s comfort and value.",
    image: img6,
  },
];

const ExploreSection: React.FC = () => {
  return (
    <section className="relative bg-[#0f0f14] py-24 text-white overflow-hidden">
      
      {/* Background Pattern (optional) */}
      <div className="absolute inset-0 opacity-10 bg-[url('/assets/images/shape/shape-1.png')] bg-cover bg-center" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h6 className="text-sm text-[#bf126e] uppercase tracking-wide mb-3">
            ⭐ Public Assistance & Support
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Relief Programs
          </h2>
          <div className="w-12 h-[3px] bg-[#bf126e] mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden"
            >
              
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition duration-300" />

              {/* Default Text */}
              <div className="absolute bottom-6 left-6 z-10 transition duration-300 group-hover:opacity-0">
                <h4 className="text-lg font-semibold">
                  {item.title}
                </h4>
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-start px-6 opacity-0 group-hover:opacity-100 transition duration-500 z-10">
                
                <h4 className="text-xl font-bold mb-3 leading-snug">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-200 mb-5">
                  {item.description}
                </p>

                <a
                  href="#"
                  className="text-sm font-semibold text-white border-b border-[#bf126e] hover:text-[#bf126e] transition"
                >
                  Get Started →
                </a>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ExploreSection;