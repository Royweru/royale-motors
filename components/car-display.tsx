import { Car } from "@/types";
import React from "react";
import { CarCard } from "./car-card";

export const CarDisplay = ({ cars }: { cars: Car[] }) => {
  return (
    <div className=" container relative">
      <div
        className=" w-full relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 xl:grid-cols-10
          gap-1 md:gap-2 lg:gap-3  py-12 md:py-16
         "
      >
        {cars.map((car) => (
          <CarCard key={car.id} data={car} />
        ))}
      </div>
    </div>
  );
};
