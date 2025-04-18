import React, { useState } from "react";
import CarList from "./CarList";
import Welcome from "./Welcome";
import ReviewsPage from "./Reviews";
import CarBrands from "./CarBrands";
import AboutUs from "./AboutUs";

function SearchPage() {
  const [filters, setFilters] = useState({});

  return (
    <>
      <Welcome />

      <section className="py-8 px-4 md:px-6 lg:px-8">
        <CarBrands />
      </section>

      <section id="cars" className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-600 tracking-wide">
            Featured Cars
          </h1>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <CarList filters={filters} />
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/995591945050?text=I'm%20interested%20in%20renting%20a%20car!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-500 p-3 rounded-full shadow-md hover:bg-green-600 transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 32 32"
          fill="white"
        >
          <path d="M16.003 0C7.165 0 .002 7.163.002 16c0 2.823.738 5.587 2.138 7.998L0 32l8.221-2.122A15.907 15.907 0 0 0 16.003 32c8.837 0 15.998-7.162 15.998-16S24.84 0 16.003 0zm0 29.719c-2.638 0-5.217-.703-7.465-2.037l-.533-.316-4.881 1.26 1.297-4.748-.35-.548A13.57 13.57 0 0 1 2.425 16c0-7.481 6.096-13.578 13.578-13.578S29.58 8.519 29.58 16c0 7.482-6.096 13.578-13.577 13.578zm7.388-9.994c-.404-.202-2.385-1.18-2.754-1.314-.369-.135-.637-.202-.905.202s-1.036 1.314-1.27 1.584c-.232.27-.468.304-.872.101-.404-.202-1.708-.63-3.255-2.012-1.203-1.07-2.015-2.393-2.252-2.798-.232-.404-.025-.621.177-.823.182-.182.404-.472.606-.708.202-.236.27-.404.404-.674.135-.27.067-.505-.033-.708-.101-.202-.905-2.179-1.24-2.98-.326-.787-.656-.678-.905-.687l-.773-.013c-.27 0-.708.101-1.078.505s-1.414 1.38-1.414 3.365c0 1.985 1.447 3.9 1.648 4.172.202.27 2.85 4.344 6.912 6.095.967.417 1.721.666 2.309.852.97.308 1.85.264 2.547.16.777-.116 2.385-.974 2.723-1.913.337-.939.337-1.743.236-1.913-.101-.168-.369-.27-.773-.472z" />
        </svg>
      </a>

      <section className="py-10 bg-gray-100 mt-12">
        <ReviewsPage />
      </section>

      <AboutUs />
    </>
  );
}

export default SearchPage;
