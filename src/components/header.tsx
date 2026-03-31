import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from '../assets/LOGO-removebg-preview.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <> 
     <div className="w-full bg-gray-100 border-b border-gray-300 text-sm">
      <div className="max-w-7xl mx-auto flex items-center px-4 py-2">
        
        {/* Flag */}
        <div className="flex-shrink-0 mr-3">
          <img
            src="https://www.usa.gov/themes/custom/usagov/images/favicon-57.png"
            alt=""
            aria-hidden="true"
            className="w-5 h-5"
          />
        </div>

        {/* Text */}
        <div className="flex-1 flex items-center justify-between">
          <div>
            <p className="text-gray-800">
              Verified grant program recognized by U.S. authorities
            </p>

            {/* Mobile text */}
            <p
              onClick={() => setOpen(!open)}
              className="text-blue-700 underline cursor-pointer md:hidden"
            >
              Learn how this is verified
            </p>
          </div>

          {/* Desktop Toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="hidden md:flex items-center gap-1 text-blue-700 hover:underline"
          >
            <span>Learn how this is verified</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`w-4 h-4 transition-transform ${
                open ? "rotate-180" : ""
              }`}
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Expandable Content */}
      {open && (
        <div className="bg-white border-t border-gray-300 px-4 py-3 text-gray-700 text-sm">
          <p>
            This grant initiative is part of a global support program aimed at
            empowering individuals and communities. It is presented as a
            verified opportunity aligned with international development efforts
            and recognized standards of transparency.
          </p>
        </div>
      )}
    </div>
    <header className="flex items-center  justify-between p-4 bg-white border-b sticky top-0 z-30">
      {/* Hamburger Icon */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-gray-800"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Full-screen Menu */}
      {menuOpen && (
        <div className="fixed inset-0  bg-white flex flex-col items-center justify-center gap-6 text-lg font-semibold z-50">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4"
          >
            <X size={32} />
          </button>
          <Link to="/" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/info" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>BMGF INFO</Link>
          <Link to="/winners" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>Winners List</Link>
          <Link to="/prize-claim" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>Prize Claim</Link>
          <Link to="/contact" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-gray-800 font-medium">
        <Link to="/" className="hover:text-purple-600">Home</Link>
        <Link to="/info" className="hover:text-purple-600">BGMF INFO</Link>
        <Link to="/about" className="hover:text-purple-600">About Us</Link>
        <Link to="/winners" className="hover:text-purple-600">Winners List</Link>
        <Link to="/prize-claim" className="hover:text-purple-600">Prize Claim</Link>
        <Link to="/contact" className="hover:text-purple-600">Contact Us</Link>
      </nav>

      {/* Logo on the right */}
    <Link to='/'>
    <div className="text-xl font-bold text-purple-700"><img src={logo} width={100} /></div>

    </Link>      </header></>
  );
};

export default Header;
