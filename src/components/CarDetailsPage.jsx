import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import BookingForm from "./BookingForm";
import { Context } from "../App";

const mockCarData = {};

function CarDetailsPage() {
  const { id } = useParams();
  const { cars } = useContext(Context);

  const car = cars.find((carID) => carID.id == id);
  const [selectedImage, setSelectedImage] = useState(car.images[0]);

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">
        {car.make} {car.model}
      </h2>

      {/* Main Image */}
      <div className="w-full h-64 md:h-96 overflow-hidden rounded-xl shadow">
        <img
          src={selectedImage}
          alt={`${car.make} ${car.model}`}
          className="w-full h-full object-cover transition duration-300"
        />
      </div>

      {/* Scrollable Thumbnails */}
      <div className="flex gap-4 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {car.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedImage(img)}
            className={`w-32 h-20 object-cover rounded-md flex-shrink-0 border-2 ${
              selectedImage === img ? "border-blue-500" : "border-gray-200"
            } cursor-pointer hover:scale-105 transition-transform`}
          />
        ))}
      </div>

      {/* Car Info */}
      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-medium">Engine:</span> {car.engine}
        </p>
        <p>
          <span className="font-medium">Transmission:</span> {car.transmition}
        </p>
        <p>
          <span className="font-medium">Seats:</span> {car.seats}
        </p>
        <p className="text-xl font-bold text-blue-600">${car.price}/day</p>
      </div>

      {/* Booking Form */}
      <div className="mt-6">
        <BookingForm />
      </div>
    </div>
  );
}

export default CarDetailsPage;
