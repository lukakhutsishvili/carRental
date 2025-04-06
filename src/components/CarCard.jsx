// components/CarCard.js
import React from "react";
import { Link } from "react-router-dom";

function CarCard({ car }) {
  return (
    <div className="border rounded p-4 text-center">
      <img
        src={car.image}
        alt={`${car.make} ${car.model}`}
        className="max-w-full h-auto mb-2"
      />
      <h3 className="text-lg font-semibold">
        {car.make} {car.model}
      </h3>
      <p>${car.price}/day</p>
      <Link
        to={`/car/${car.id}`}
        className="bg-blue-500 text-white rounded p-2 mt-2 inline-block hover:bg-blue-600"
      >
        View Details
      </Link>
    </div>
  );
}

export default CarCard;
