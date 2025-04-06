import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";

function Header() {
  const { user, setUser } = useContext(AuthContext);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4">
      <nav className="flex justify-between items-center container mx-auto">
        <Link to="/" className="text-xl font-bold">
          Logo
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/profile" className="hover:text-gray-200">
            about Us
          </Link>
          <Link to="/admin" className="hover:text-gray-200">
            reviews
          </Link>
          <div>ლარი, დოლარი, ევრო</div>
          <div>language change</div> {/* Corrected line */}
        </div>
      </nav>
    </header>
  );
}

export default Header;
