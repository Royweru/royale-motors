"use client";
import Image from "next/image";
import React from "react";

export const Body = ({
  imgSrc,
  label,
  id,
}: {
  label: string;
  id: number;
  imgSrc: string;
}) => {
  return (
    <div className=" flex flex-col gap-y-1 font-bold">
      <div
        className=" w-[100px] h-[100px] relative hover:opacity-75 
    cursor-pointer "
      >
        <Image
          src={imgSrc}
          alt="Body type"
          fill
          className=" object-contain object-center"
        />
      </div>
      <p className=" text-center w-full relative text-txt-accent">{label}</p>
    </div>
  );
};
