// components/CarList.js
import React, { useContext } from "react";
import CarCard from "./CarCard";
import { Context } from "../App";
import { useParams } from "react-router-dom";

function CarList() {
  const { id } = useParams();
  const { cars } = useContext(Context);

  const car = cars.find((carID) => carID.id == id);
  return (
    <>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </>
  );
}

export default CarList;
