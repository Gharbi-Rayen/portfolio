import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [workDropdown, setWorkDropdown] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    setWorkDropdown(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="text-2xl font-light tracking-widest text-white cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            PORTFOLIO
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12 items-center">
            <button
              onClick={() => handleNavClick("home")}
              className={`text-sm tracking-widest ${
                activeSection === "home" ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              HOME
            </button>

            {/* Work Dropdown */}
            <div className="relative">
              <button
                onClick={() => setWorkDropdown(!workDropdown)}
                className={`text-sm tracking-widest flex items-center ${
                  ["work", "mobile", "web", "others"].includes(activeSection)
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
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
                  {["mobile", "web", "others"].map((item) => (
                    <button
                      key={item}
                      onClick={() => handleNavClick(item)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800"
                    >
                      {item.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick("about")}
              className={`text-sm tracking-widest ${
                activeSection === "about" ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              ABOUT
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className={`text-sm tracking-widest ${
                activeSection === "contact" ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              CONTACT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-gray-800 pt-6 space-y-4">
            <button onClick={() => handleNavClick("home")} className="block text-white text-lg">
              HOME
            </button>
            <div>
              <button
                onClick={() => setWorkDropdown(!workDropdown)}
                className="flex items-center justify-between w-full text-white text-lg"
              >
                WORK
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${workDropdown ? "rotate-180" : ""}`}
                />
              </button>
              {workDropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  {["mobile", "web", "others"].map((item) => (
                    <button
                      key={item}
                      onClick={() => handleNavClick(item)}
                      className="block text-gray-300 text-base"
                    >
                      {item.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button onClick={() => handleNavClick("about")} className="block text-white text-lg">
              ABOUT
            </button>
            <button onClick={() => handleNavClick("contact")} className="block text-white text-lg">
              CONTACT
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
