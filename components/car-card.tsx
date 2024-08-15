import { Car } from "@/types";
import Image from "next/image";
import React from "react";

export const CarCard = ({ data }: any) => {
  return (
    <div className=" rounded-2xl p-4 px-2 drop-shadow border-2 border-gray-900 bg-slate-300 opacity-95 w-2/5">
      <div className=" w-full relative flex flex-col gap-y-2">
        <h2 className=" max-w-sm font-semibold text-black">
          {data.make}, {data.model}
        </h2>
        <div className=" w-full relative h-[250px] ">
          <Image
            fill
            src={data.image}
            alt="car"
            className=" object-contain object-center"
          />
        </div>
        <div className=" flex justify-between w-full items-center">
          <p></p>
          <p className=" font-light text-sm text-rose-400">
            ${" "}
            <span className=" text-2xl font-bold text-blue-300 ">
              {data.price}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
