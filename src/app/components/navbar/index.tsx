// components/Navbar.tsx
import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-20 py-12 bg-transparent relative z-10">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/logo.png" // Replace with your actual logo filename
          alt="App Logo"
          width={36} // Adjust width as needed
          height={36} // Adjust height to maintain aspect ratio
          priority
          className="z-10 object-contain"
        />

        <span className="text-white font-semibold text-lg">Fitwise</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        <a
          href="#"
          className="text-white hover:text-[#4395FF] transition-colors"
        >
          Home
        </a>
        <a
          href="#"
          className="text-white hover:text-[#4395FF] transition-colors"
        >
          Features
        </a>
        <a
          href="#"
          className="text-white hover:text-[#4395FF] transition-colors"
        >
          Community
        </a>
        <a
          href="#"
          className="text-white hover:text-[#4395FF] transition-colors"
        >
          Download
        </a>
        <a
          href="#"
          className="text-white hover:text-[#4395FF] transition-colors"
        >
          News
        </a>
      </div>

      {/* Download Button */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
        Download App
      </button>
    </nav>
  );
};

export default Navbar;
