import React from "react";
import logo from '../assets/LOGO-removebg-preview.png'

const PageLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center">
      
      {/* Spinner */}
      <div className="w-20 h-20 border-4 border-[#bf126e] border-t-black rounded-full animate-spin"></div>

      {/* Logo at bottom */}
      <div className="absolute bottom-10 text-center">
        <img
          src={logo} // change to your logo path
          alt="Logo"
          className="w-[400px] mx-auto mb-2"
        />
       
      </div>

    </div>
  );
};

export default PageLoader;