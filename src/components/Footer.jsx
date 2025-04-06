// components/Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 p-4 text-center">
      <p>&copy; {new Date().getFullYear()} DriveEasy Rentals</p>
    </footer>
  );
}

export default Footer;
