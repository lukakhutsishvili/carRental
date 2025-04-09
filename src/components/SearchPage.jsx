import React, { useState } from "react";
import CarList from "./CarList";
import Welcome from "./Welcome";
import ReviewsPage from "./Reviews";
// import MapComponent from "./MapComponent"; // integrate with map api.

function SearchPage() {
  const [filters, setFilters] = useState({});

  return (
    <>
      <Welcome />
      <div className="bg-black mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        <CarList filters={filters} />
      </div>
      <ReviewsPage />
    </>
  );
}

export default SearchPage;
