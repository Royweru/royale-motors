import { CarType } from "@/types";
import React from "react";

export const CarProperties = ({ car }: { car: CarType }) => {
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
        <p className="text-md md:text-lg text-black-1 font-bold">{car.HP}</p>
      </div>
      {/* <div className=" flex gap-x-4 items-center">
        <h5 className=" text-md  text-red-secondary">Transimission:</h5>
        <p className="text-md md:text-lg text-black-1 font-bold">
          {car.transmision}
        </p>
      </div> */}
      <div className=" flex gap-x-4 items-center">
        <h5 className=" text-md  text-red-secondary">Drive :</h5>
        <p className="text-md md:text-lg text-black-1 font-bold">{car.drive}</p>
      </div>
      <div className=" flex gap-x-4 items-center">
        <h5 className=" text-md  text-red-secondary">
          Acceleration(0-100 Km/hr) :
        </h5>
        <p className="text-md md:text-lg text-black-1 font-bold">
          {car.acceleration}
        </p>
      </div>
      <div className=" flex gap-x-4 items-center">
        <h5 className=" text-md  text-red-secondary">Engine size</h5>
        <p className="text-md md:text-lg text-black-1 font-bold">
          {car.engineSize}
        </p>
      </div>
      <div className=" flex gap-x-4 items-center">
        <h5 className=" text-md  text-red-secondary">Fuel Type</h5>
        <p className="text-md md:text-lg text-black-1 font-bold">
          {car.fuelType}
        </p>
      </div>
    </div>
  );
};
