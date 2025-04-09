// components/Footer.js
import React from "react";

function Footer() {
  return (
    <footer className=" bg-black p-4 text-center">
      <p className="text-white">
        &copy; {new Date().getFullYear()} DriveEasy Rentals
      </p>
    </footer>
  );
}

export default Footer;
