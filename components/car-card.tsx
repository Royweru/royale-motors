"use client";

import { Car } from "@/types";
import Image from "next/image";
import React from "react";
import { CarCardExtras } from "./car-card-extras";
import { useRouter } from "next/navigation";

export const CarCard = ({ data }: { data: Car }) => {
  const router = useRouter();
  return (
    <div
      className=" col-span-1 lg:col-span-2 xl:col-span-2 
    cursor-pointer group hover:scale-105"
      onClick={() => router.push(`/car/${data.id}`)}
    >
      <div className=" w-full flex flex-col relative inset-0 rounded-xl gap-y-2 bg-white justify-normal mx-auto">
        <div className=" relative w-full  h-[150px]">
          <Image
            fill
            alt=""
            src={"/honda1.jpg"}
            className=" object-center
             object-cover rounded-xl group-hover:scale-105"
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

        <div className=" w-full relative px-4 mb-1">
          {" "}
          <div className="h-[0.5px] bg-black-1" />
        </div>
        <CarCardExtras car={data} />

        <div className=" absolute top-1 right-1 w-full flex items-center gap-2 justify-end">
          <div className=" relative bg-red-primary flex justify-start gap-1 py-[0.5px] px-1 rounded-md items-center">
            <img width={14} height={14} src="/star.png" />
            <p className=" text-xs font-semibold tracking-wide ">4.5/5</p>
          </div>
          <div className=" relative bg-white flex justify-start gap-1 py-[0.5px] px-1 rounded-md items-center">
            <p className=" text-xs font-semibold tracking-wide text-red-primary">
              Available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
