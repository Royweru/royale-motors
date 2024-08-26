import { Feature } from "@prisma/client";
import { Check, Feather, Star, TicketCheck } from "lucide-react";
import React from "react";

export const CarFeatures = ({ features }: { features: Feature[] }) => {
  return (
    <div className=" flex-1">
      <div className=" w-full flex justify-start px-4 lg:px-0 gap-x-3  items-center">
        <Star className=" w-4 h-4 text-txt-secondary" />
        <h2 className="  h5 text-txt-accent">Features</h2>
      </div>
      {features.map((feature) => (
        <div
          key={feature.id}
          className=" w-full relative flex items-center my-4"
        >
          <Check className=" w-5 h-5 text-white  mr-3" />
          <p className=" font-semibold text-xl">{feature.name}</p>
        </div>
      ))}
    </div>
  );
};
