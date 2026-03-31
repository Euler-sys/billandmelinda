import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

import Header from "./components/header";
import Home from "./pages/Home";
import Footer from "./components/footer";
import AboutUs from "./pages/about";
import ClaimWinnings from "./pages/claim";
import ContactUs from "./components/contact";
import Winners from "./pages/winners";
import ManageWinners from "./pages/manage";
import PageLoader from "./components/pageLoader";
import { FaPhone } from "react-icons/fa";
import ScrollToTop from "./components/scroll";

const AppContent: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // adjust speed

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="font-sans">
      <ScrollToTop/>
      {loading && <PageLoader />}

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="prize-claim" element={<ClaimWinnings />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="winners" element={<Winners />} />
        <Route path="admin" element={<ManageWinners />} />
      </Routes>

      <Footer />

  {/* Floating Buttons */}
<div>
  {/* Claim Prize (React Router Link) */}
  {/* <Link
    to="/prize-claim"
    className="fixed bottom-4 right-4 bg-black text-white px-3 py-2 mb-4 rounded-full shadow-lg text-sm font-semibold hover:bg-blue-800 z-50"
  >
    Claim Prize
  </Link> */}

  {/* SMS Button */}
  <a
    href={`sms:+2348012345678?body=${encodeURIComponent(
      "Hello, I would like to make an enquiry."
    )}`}
    className="fixed bottom-4 right-4 bg-[#bf126e] text-white p-3 rounded-full shadow-lg hover:bg-pink-400 transition  flex items-center justify-center"
  >
    <FaPhone className="text-lg" />
  </a>
</div>

      <Link
        to="/winners"
        className="fixed bottom-4 left-4 bg-[#bf126e] text-white px-3 py-2 mb-4 rounded-full shadow-lg text-sm font-semibold hover:bg-pink-400"
      >
        Check Eligibility
      </Link>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;