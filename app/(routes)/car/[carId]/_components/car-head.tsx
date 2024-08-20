import { CarGallery } from "@/components/car-gallery";
import { Car } from "@/types";
import React from "react";
import { CarProperties } from "./car-properties";
import { Header } from "./header";
import { CarFeatures } from "./car-features";

export const CarHead = ({ data }: { data: Car }) => {
  return (
    <div
      className=" max-w-[64rem] lg:mx-0 mx-3  w-full relative bg-transparent border-blue-primary
     border-[2px] drop-shadow-lg rounded-2xl my-4 py-3 md:py-4 lg:py-5"
    >
      <div
        className=" w-full grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-1
          "
      >
        <div className=" lg:col-span-2  col-span-1 px-2 ">
          <CarGallery />
          <CarProperties car={data} />
        </div>
        <div className=" col-span-1 lg:col-span-1 sm:order-first lg:order-last lg:px-0 px-4">
          <Header make={data.make} model={data.model} color={data.color} />
          <CarFeatures car={data} />
        </div>
      </div>
    </div>
  );
};
