import React from "react";
import { Link } from "react-router-dom";

function CarCard({ car }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
      <img
        src={car.image}
        alt={`${car.make} ${car.model}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2 text-left">
        <h3 className="text-xl font-semibold text-gray-800">
          {car.make} {car.model}
        </h3>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Engine:</span> {car.engine || "N/A"}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Transmission:</span>{" "}
          {car.transmition || "N/A"}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Seats:</span> {car.seats || "N/A"}
        </p>
        <p className="text-lg font-bold text-blue-600">${car.price}/day</p>

        <Link
          to={`/car/${car.id}`}
          className="inline-block w-full text-center bg-blue-500 text-white rounded-md py-2 mt-2 hover:bg-blue-600 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default CarCard;
