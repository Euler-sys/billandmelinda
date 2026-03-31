import React from "react";
import aboutImg from "../assets/about-1.jpg";

const About: React.FC = () => {
  return (
    <section className="bg-[#f9f9fb] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Section Title */}
            <div className="mb-6">
              <h6 className="flex items-center gap-2 text-sm text-[#bf126e] font-semibold uppercase tracking-wide mb-2">
                ⭐ About Bill and Melinda Gates Foundation
              </h6>
              <div className="w-12 h-[3px] bg-[#bf126e]"></div>
            </div>

            {/* Text Content */}
            <div className="space-y-5 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                <strong className="text-gray-800">
                  Bill and Melinda Gates Foundation
                </strong>{" "}
                is focused on supporting individuals and communities by
                providing access to funding opportunities that promote economic
                stability and long-term growth. Our programs are designed to
                assist with business development, education, housing, and
                personal financial needs.
              </p>

              <p>
                Our goal is to help reduce financial barriers and empower people
                to improve their standard of living. Through structured support
                initiatives, we aim to encourage sustainable development and
                create opportunities for those in need.
              </p>

              <p>
                Whether you are an entrepreneur, a student, or someone seeking
                financial assistance, our platform connects you with programs
                designed to support your journey toward financial independence
                and stability.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={aboutImg}
                alt="About"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlay Card */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-md max-w-xs">
              <h4 className="text-sm font-semibold text-gray-800 leading-snug">
                “Providing support to individuals and families in times of
                need.”
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
