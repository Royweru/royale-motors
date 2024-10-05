import { CarGallery } from "@/components/car-gallery";
import { CarType } from "@/types";
import React from "react";
import { CarProperties } from "./car-properties";
import { Header } from "./header";
import { CarFeatures } from "./car-features";

export const CarHead = ({ data }: { data: any }) => {
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
          <CarGallery images={data.images} />
          <CarProperties car={data} />
        </div>
        <div className=" col-span-1 lg:col-span-1 order-first md:order-last lg:px-0 px-4">
          <Header
            make={data.make.name}
            model={data.model.name}
            color={data.color}
          />
          <div className=" flex  flex-col relative mt-4 h-2/3">
            <CarFeatures features={data.features} />
            <div className="  rounded-3xl flex justify-between items-center px-8 md:px-12">
              <p className=" text-2xl font-semibold ">Kes</p>
              <p className="font-sans text-5xl font-extrabold text-white-dark">
                {data.price.toLocaleString("en-US")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
