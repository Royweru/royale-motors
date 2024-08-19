import { Car } from "@/types";
import Image from "next/image";
import React from "react";

export const CarCard = ({ data }: { data: Car }) => {
  return (
    <div className=" col-span-1 lg:col-span-2 xl:col-span-2 cursor-pointer">
      <div className=" w-full flex flex-col relative inset-0 rounded-xl gap-y-2 bg-white justify-normal mx-auto">
        <div className=" relative w-full  h-[150px]">
          <Image
            fill
            alt=""
            src={"/honda1.jpg"}
            className=" object-center
             object-cover rounded-xl"
          />
        </div>
        <div className=" w-full lg:px-1 px-[7px]">
          <div className=" relative w-full flex justify-between items-center">
            <div className=" flex flex-col ">
              <p className=" text-sm font-light lg:text-xs text-blue-primary">
                {data.make}
              </p>
              <h5 className="text text-red-secondary text-3xl lg:text-xl font-black">
                {data.model}
              </h5>
            </div>

            <div className=" flex justify-center items-center gap-1">
              <p className=" text-2xl font-semibold text-blue-secondary">
                {data.price}
              </p>
              <p className=" text-xs md:text-sm font-light text-black-2">
                /only
              </p>
            </div>
          </div>
        </div>

        <div className=" w-full"></div>
      </div>
    </div>
  );
};
