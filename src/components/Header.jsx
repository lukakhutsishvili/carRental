import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <img className="h-[50px]" src="/logo/photo_2025-04-13_15-16-21.jpg" />

        {/* Navigation */}
        <div className="flex items-center gap-8 text-base font-semibold">
          <a
            href="#AboutUs"
            className="hover:text-gray-300 transition duration-200 text-lg"
            onClick={() => setIsOpen(false)}
          >
            {t("About Us")}
          </a>
          <a
            href="#reviews"
            className="hover:text-gray-300 transition duration-200 text-lg"
            onClick={() => setIsOpen(false)}
          >
            {t("reviews")}
          </a>
          <a
            href="#cars"
            className="hover:text-gray-300 transition duration-200 text-lg"
            onClick={() => setIsOpen(false)}
          >
            {t("CARS")}
          </a>

          {/* Currency Section */}
          {/* <span className="text-gray-400 hidden sm:block text-lg">
            ლარი | დოლარი | ევრო
          </span> */}

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-36 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md flex justify-between items-center text-lg transition duration-200"
            >
              {i18n.language.toUpperCase()} <span className="ml-2">▾</span>
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-gray-800 text-black rounded-lg shadow-xl overflow-hidden z-50">
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
      </nav>
    </header>
  );
}

export default Header;
