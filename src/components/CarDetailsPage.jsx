// components/CarDetailsPage.js
import React from "react";
import { useParams } from "react-router-dom";
import BookingForm from "./BookingForm";

function CarDetailsPage() {
  const { id } = useParams();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Car Details for ID: {id}</h2>
      <BookingForm />
    </div>
  );
}

export default CarDetailsPage;
