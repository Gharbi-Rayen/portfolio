import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [workDropdown, setWorkDropdown] = useState(false);

  const navClasses = ({ isActive }) =>
    `text-sm tracking-widest ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-light tracking-widest text-white">
            RGE
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12 items-center">
            <NavLink to="/" className={navClasses}>
              HOME
            </NavLink>

            {/* Work Dropdown */}
            <div className="relative">
              <button
                onClick={() => setWorkDropdown(!workDropdown)}
                className="text-sm tracking-widest flex items-center text-gray-400 hover:text-white"
              >
                WORK
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    workDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {workDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-black bg-opacity-95 border border-gray-700 rounded-lg py-2">
                  <NavLink to="/mobile" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800">
                    MOBILE
                  </NavLink>
                  <NavLink to="/web" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800">
                    WEB
                  </NavLink>
                  <NavLink to="/others" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800">
                    OTHERS
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/about" className={navClasses}>
              ABOUT
            </NavLink>
            <NavLink to="/contact" className={navClasses}>
              CONTACT
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-gray-800 pt-6 space-y-4">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="block text-white text-lg">
              HOME
            </NavLink>

            <div>
              <button
                onClick={() => setWorkDropdown(!workDropdown)}
                className="flex items-center justify-between w-full text-white text-lg"
              >
                WORK
                <ChevronDown className={`w-4 h-4 transition-transform ${workDropdown ? "rotate-180" : ""}`} />
              </button>
              {workDropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  <NavLink to="/mobile" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 text-base">
                    MOBILE
                  </NavLink>
                  <NavLink to="/web" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 text-base">
                    WEB
                  </NavLink>
                  <NavLink to="/others" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 text-base">
                    OTHERS
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className="block text-white text-lg">
              ABOUT
            </NavLink>
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className="block text-white text-lg">
              CONTACT
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
