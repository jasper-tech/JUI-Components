import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const ResponsiveHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="/">MyLogo</a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <a href="/services" className="hover:text-gray-400">
            Services
          </a>
          <a href="/contact" className="hover:text-gray-400">
            Contact
          </a>
        </nav>

        {/* Hamburger Button for Mobile */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-gray-500 text-white px-4 py-2 space-y-4`}
      >
        <a href="/" className="block hover:text-gray-300">
          Home
        </a>
        <a href="/about" className="block hover:text-gray-300">
          About
        </a>
        <a href="/services" className="block hover:text-gray-300">
          Services
        </a>
        <a href="/contact" className="block hover:text-gray-300">
          Contact
        </a>
      </div>
    </header>
  );
};

export default ResponsiveHeader;
