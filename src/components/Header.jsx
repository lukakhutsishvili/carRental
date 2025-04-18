import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setIsOpen(false); // Close language dropdown if open
  };

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <img
          className="h-[50px]"
          src="/logo/photo_2025-04-13_15-16-21.jpg"
          alt="Logo"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-base font-semibold">
          <a href="#AboutUs" className="hover:text-gray-300 text-lg">
            {t("About Us")}
          </a>
          <a href="#reviews" className="hover:text-gray-300 text-lg">
            {t("reviews")}
          </a>
          <a href="#cars" className="hover:text-gray-300 text-lg">
            {t("CARS")}
          </a>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-36 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md flex justify-between items-center text-lg transition duration-200"
            >
              {i18n.language.toUpperCase()} <span className="ml-2">▾</span>
            </button>

            {isOpen && (
              <div
                className={`absolute right-0 mt-2 w-36 bg-gray-800 text-black rounded-lg shadow-xl overflow-hidden z-50
                  transition-all duration-300 transform origin-top ${
                    isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
              >
                <button
                  onClick={() => changeLanguage("en")}
                  className="block text-white w-full px-4 py-2 text-left hover:bg-gray-400 text-base"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("ka")}
                  className="block text-white w-full px-4 py-2 text-left hover:bg-gray-400 text-base"
                >
                  ქართული
                </button>
                <button
                  onClick={() => changeLanguage("ru")}
                  className="block text-white w-full px-4 py-2 text-left hover:bg-gray-400 text-base"
                >
                  Русский
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="white"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[72px] left-0 w-full bg-black text-white px-6 py-6 space-y-4 z-40 transition-all duration-300 ease-in-out transform ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <a href="#AboutUs" className="block text-lg" onClick={toggleMenu}>
          {t("About Us")}
        </a>
        <a href="#reviews" className="block text-lg" onClick={toggleMenu}>
          {t("reviews")}
        </a>
        <a href="#cars" className="block text-lg" onClick={toggleMenu}>
          {t("CARS")}
        </a>

        {/* Mobile Language Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md flex justify-between items-center text-lg"
          >
            {i18n.language.toUpperCase()} <span className="ml-2">▾</span>
          </button>

          {isOpen && (
            <div
              className={`mt-2 w-full bg-gray-800 text-black rounded-lg shadow-xl overflow-hidden z-50
              transition-all duration-300 transform origin-top ${
                isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <button
                onClick={() => changeLanguage("en")}
                className="block text-white w-full px-4 py-2 text-left hover:bg-gray-400 text-base"
              >
                English
              </button>
              <button
                onClick={() => changeLanguage("ka")}
                className="block text-white w-full px-4 py-2 text-left hover:bg-gray-400 text-base"
              >
                ქართული
              </button>
              <button
                onClick={() => changeLanguage("ru")}
                className="block text-white w-full px-4 py-2 text-left hover:bg-gray-400 text-base"
              >
                Русский
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
