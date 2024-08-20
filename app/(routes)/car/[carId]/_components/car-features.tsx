import { Car } from "@/types";
import { Check, Feather, Star, TicketCheck } from "lucide-react";
import React from "react";

export const CarFeatures = ({ car }: { car: Car }) => {
  return (
    <div className=" flex  flex-col relative mt-4 h-2/3">
      <div className=" flex-1">
        <div className=" w-full flex justify-start px-4 lg:px-0 gap-x-3  items-center">
          <Star className=" w-4 h-4 text-txt-secondary" />
          <h2 className="  h5 text-txt-accent">Features</h2>
        </div>
        {car.features.map((feature) => (
          <div
            key={feature}
            className=" w-full relative flex items-center my-4"
          >
            <Check className=" w-5 h-5 text-white  mr-3" />
            <p className=" font-semibold text-xl">{feature}</p>
          </div>
        ))}
      </div>
      <div className="  rounded-3xl flex justify-between items-center px-8 md:px-12">
        <p className=" text-2xl font-semibold ">Kes</p>
        <p className="font-sans text-5xl font-extrabold text-white">
          {car.price}
        </p>
      </div>
    </div>
  );
};
