import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../App";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Header() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <header className="bg-black text-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-semibold tracking-wide hover:text-gray-300 transition-colors duration-200"
        >
          Logo
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link
            to="/profile"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            {t("about us")}
          </Link>
          <Link
            to="/admin"
            className="hover:text-gray-400 transition-colors duration-200"
          >
            {t("reviews")}
          </Link>
          <div className="text-gray-300">ლარი | დოლარი | ევრო</div>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-[128px] bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded text-sm transition duration-200"
            >
              {i18n.language} ▾
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md z-10 w-32">
                <button
                  onClick={() => changeLanguage("en")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("ka")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  ქართული
                </button>
                <button
                  onClick={() => changeLanguage("ru")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
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
