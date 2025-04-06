// components/CarList.js
import React from "react";
import CarCard from "./CarCard";

function CarList() {
  const cars = [
    {
      id: 1,
      make: "Toyota",
      model: "Camry",
      image: "lexus/754d127f-316b-448a-9d64-ff993dcdb567.jfif",
      price: 50,
      transmition: "mechanic",
      engine: "kafut",
      seats: "7",
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      image: "/lexus/download.jfif",
      price: 45,
    },
    {
      id: 3,
      make: "Honda",
      model: "Civic",
      image: "public/lexus/754d127f-316b-448a-9d64-ff993dcdb567.jfif",
      price: 85,
    },
  ];

  return (
    <>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </>
  );
}

export default CarList;
