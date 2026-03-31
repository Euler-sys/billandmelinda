import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
//   FaCheckCircle,
  FaUserShield,
  FaGlobe,
  FaChartLine,
  FaSearch,
  FaMoneyBillWave,
  FaClock,
  FaQuestionCircle,
} from "react-icons/fa";
// import hero from '../assets/hero.jpg'

const GrantInfoPage: React.FC = () => {
  const [ref, setRef] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

        {/* <img src={hero} alt="" height={100} /> */}

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Grant Beneficiary Verification Portal
          </h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            Check your status and confirm if you have been selected as a
            beneficiary of the Global Development Grant Program.
          </p>
        </motion.div>
      </div>

      {/* SEARCH BOX */}
      <div className="max-w-4xl mx-auto -mt-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-xl rounded-2xl p-6"
        >
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <FaSearch className="text-blue-700" /> Check Your Status
          </h2>

          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter your reference number..."
              value={ref}
              onChange={(e) => setRef(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
            />

            <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
              Verify
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-3">
            Your reference number was provided during notification.
          </p>
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">

        {/* ABOUT */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <FaGlobe className="text-blue-700" /> About the Program
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This program identifies and supports selected beneficiaries through structured funding initiatives
            aimed at improving financial stability, business growth, and personal development.
          </p>
        </motion.section>

        {/* STATUS */}
        <motion.section className="bg-blue-50 p-8 rounded-2xl" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-2xl font-bold mb-4">Understanding Your Status</h2>
          <ul className="space-y-3 text-gray-700">
            <li>✅ Approved – You have been selected</li>
            <li>⏳ Pending – Verification in progress</li>
            <li>❌ Not Selected – Not selected this round</li>
          </ul>
        </motion.section>

        {/* FUNDING */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <FaMoneyBillWave className="text-green-600" /> Funding Structure
          </h2>
          <p className="text-gray-700">
            Funding is distributed based on eligibility and category, ranging from small support packages
            to larger financial assistance allocations depending on applicant profile and need.
          </p>
        </motion.section>

        {/* TIMELINE */}
        <motion.section className="bg-white p-8 rounded-2xl shadow" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <FaClock className="text-purple-600" /> Program Timeline
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Registration Phase</li>
            <li>• Verification & Screening</li>
            <li>• Beneficiary Selection</li>
            <li>• Fund Disbursement</li>
          </ul>
        </motion.section>

        {/* IMPACT */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <FaChartLine className="text-orange-500" /> Program Impact
          </h2>
          <p className="text-gray-700">
            Beneficiaries have experienced improved financial conditions, business expansion,
            and increased access to opportunities through structured support programs.
          </p>
        </motion.section>

        {/* FAQ */}
        <motion.section className="bg-gray-100 p-8 rounded-2xl" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <FaQuestionCircle /> Frequently Asked Questions
          </h2>
          <div className="space-y-3 text-gray-700">
            <p><strong>How do I check my status?</strong><br />Enter your reference number above.</p>
            {/* <p><strong>Is payment required?</strong><br />No upfront payment is required.</p> */}
            <p><strong>How long does verification take?</strong><br />Typically within minutes.</p>
          </div>
        </motion.section>

        {/* SECURITY */}
        <motion.section className="bg-white p-6 rounded-xl shadow" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <FaUserShield /> Security Notice
          </h2>
          {/* <p className="text-gray-700 text-sm">
            Do not share personal information with unauthorized sources. Always verify through official channels.
          </p> */}
        </motion.section>

        {/* CTA → LINK */}
        <div className="text-center">
          <Link to="/winners">
            <button className="bg-green-600 text-white px-10 py-4 rounded-xl text-lg hover:bg-green-700 transition shadow">
              View Full Winners List
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default GrantInfoPage;