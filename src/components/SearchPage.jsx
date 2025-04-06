import React, { useState } from "react";
import CarList from "./CarList";
// import MapComponent from "./MapComponent"; // integrate with map api.

function SearchPage() {
  const [filters, setFilters] = useState({});

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <CarList filters={filters} />
    </div>
  );
}

export default SearchPage;
