import React from "react";

const ImpactSection: React.FC = () => {
  return (
    <section className="bg-[#f9f9fb] py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Achievements and Impact
          </h2>
          <div className="w-12 h-[3px] bg-[#bf126e] mx-auto" />
        </div>

        {/* Intro */}
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          Over the years, we have been dedicated to improving lives and empowering
          communities. Our initiatives have created meaningful impact across
          different sectors, supporting individuals, families, and businesses.
        </p>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
            <h3 className="text-2xl font-bold text-[#bf126e]">1,500+</h3>
            <p className="text-sm text-gray-600 mt-2">
              Small Businesses Funded
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
            <h3 className="text-2xl font-bold text-[#bf126e]">800+</h3>
            <p className="text-sm text-gray-600 mt-2">
              Students Supported
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
            <h3 className="text-2xl font-bold text-[#bf126e]">2,000+</h3>
            <p className="text-sm text-gray-600 mt-2">
              Individuals Assisted
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
            <h3 className="text-2xl font-bold text-[#bf126e]">Global</h3>
            <p className="text-sm text-gray-600 mt-2">
              Community Reach
            </p>
          </div>

        </div>

        {/* Details */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          
          <ul className="space-y-4 text-gray-700 text-sm md:text-base">
            
            <li className="flex items-start gap-3">
              <span className="text-[#bf126e] mt-1">✔</span>
              Successfully secured funding for over 1,500 small businesses,
              fostering entrepreneurship and economic growth.
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#bf126e] mt-1">✔</span>
              Provided educational grants to more than 800 students, enabling
              them to pursue higher education opportunities.
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#bf126e] mt-1">✔</span>
              Assisted families in accessing affordable housing through
              structured support programs.
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#bf126e] mt-1">✔</span>
              Supported over 2,000 individuals facing financial hardship
              through community-based initiatives.
            </li>

            <li className="flex items-start gap-3">
              <span className="text-[#bf126e] mt-1">✔</span>
              Promoted financial literacy and awareness to help individuals
              make informed decisions.
            </li>

          </ul>

          {/* Closing */}
          <p className="mt-8 text-gray-600 leading-relaxed">
            We are proud of the positive transformations we’ve contributed to
            and remain committed to expanding our impact through continued
            support and innovation.
          </p>

        </div>

      </div>
    </section>
  );
};

export default ImpactSection;