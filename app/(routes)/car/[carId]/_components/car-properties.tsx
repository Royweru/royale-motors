import { Car } from "@/types";
import React from "react";

export const CarProperties = ({ car }: { car: Car }) => {
  return (
    <div
      className=" rounded-3xl bg-white-dark shadow-medium 
    flex flex-wrap  gap-4
     items-center p-6 md:p-8"
    >
      <div className=" flex gap-x-4 items-center">
        <h5 className=" text-md  text-red-secondary">Mileage :</h5>
        <p className="text-md md:text-lg text-black-1 font-bold">
          {car.mileage}
        </p>
      </div>
      <div className=" flex gap-x-4 items-center">
        <h5 className=" text-md  text-red-secondary">Y.O.M :</h5>
        <p className="text-md md:text-lg text-black-1 font-bold">{car.year}</p>
      </div>
      <div className=" flex gap-x-4 items-center">
        <h5 className=" text-md  text-red-secondary">Fuel Type:</h5>
        <p className="text-md md:text-lg text-black-1 font-bold">
          {car.fuelType}
        </p>
      </div>
      <div className=" flex gap-x-4 items-center">
        <h5 className=" text-md  text-red-secondary">Horsepower:</h5>
        <p className="text-md md:text-lg text-black-1 font-bold">
          {car.horsepower}
        </p>
      </div>
      <div className=" flex gap-x-4 items-center">
        <h5 className=" text-md  text-red-secondary">Transimission:</h5>
        <p className="text-md md:text-lg text-black-1 font-bold">
          {car.transmission}
        </p>
      </div>
      <div className=" flex gap-x-4 items-center">
        <h5 className=" text-md  text-red-secondary">Owners :</h5>
        <p className="text-md md:text-lg text-black-1 font-bold">
          {car.mileage}
        </p>
      </div>
    </div>
  );
};
