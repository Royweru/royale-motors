import { Car } from "@/types";
import Image from "next/image";
import React from "react";

export const CarCardExtras = ({ car }: { car: Car }) => {
  return (
    <div className=" w-full flex justify-between">
      <div className="w-full flex flex-col items-center">
        <Image
          src={"/mileage.png"}
          alt=""
          width={40}
          height={40}
          className=" mr-1"
        />
        <p className=" font-semibold text-xs text-red-secondary">
          {car.mileage}
        </p>
      </div>
      <div className=" w-full flex flex-col items-center">
        <Image
          src={"/transmission.png"}
          alt=""
          width={40}
          height={40}
          className=" mr-1"
        />
        <p className=" font-semibold text-xs text-red-secondary">
          {car.transmission}
        </p>
      </div>
      <div className=" w-full flex flex-col items-center">
        <Image
          src={"/fuel.png"}
          alt=""
          width={40}
          height={40}
          className=" mr-1"
        />
        <p className=" font-semibold text-xs text-red-secondary">
          {car.fuelType}
        </p>
      </div>
    </div>
  );
};
