import React, { useState } from "react";

function MobileNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="MobileNavBar">
      <header className="w-full py-4 bg-gray-800">
        <nav className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="logo">
            <svg
              width="120"
              height="36"
              viewBox="0 0 195 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Simplified logo */}
              <path
                d="M117.752 20.3394C121.262 17.0207 124.754..."
                fill="white"
              />
            </svg>
          </div>

          {/* Hamburger Menu Button */}
          <div className="menu-icon lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

          {/* Nav Links (visible only on large screens) */}
          <ul className="hidden lg:flex space-x-8 text-white">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Menu (visible when isMenuOpen is true) */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-gray-700">
            <ul className="flex flex-col space-y-2 text-white p-4">
              <li><a href="#home" onClick={toggleMenu}>Home</a></li>
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#services" onClick={toggleMenu}>Services</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default MobileNavBar;
