import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

import "animate.css";
import Header from "./components/header";
import Home from "./pages/Home";
import Footer from "./components/footer";
import AboutUs from "./pages/about";
import ClaimWinnings from "./pages/claim";
import ContactUs from "./components/contact";
import Winners from "./pages/winners";
import ManageWinners from "./pages/manage";


const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="prize-claim" element={<ClaimWinnings />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="winners" element={<Winners />} />
          <Route path="admin" element={<ManageWinners />} />
        </Routes>
        <Footer/>
        <Link to="/prize-claim"
          className="fixed bottom-4 right-4 bg-black text-white px-3 py-2 mb-4 rounded-full shadow-lg text-sm font-semibold  hover:bg-blue-800 "
        >
          Claim Prize
        </Link>
        <Link to="/winners"
          className="fixed bottom-4 left-4 bg-black text-white px-3 py-2 mb-4 rounded-full shadow-lg text-sm font-semibold  hover:bg-blue-800 "
        >
          Check Eligibility
        </Link>
      </div>
    </Router>
  );
};

export default App;
