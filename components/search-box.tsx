"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const SearchBox = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(0);
  return (
    <div
      className=" rounded-2xl font-semibold p-4 bg-white w-full h-[225px] relative drop-shadow
     backdrop-blur-md border-2 border-black-2 flex flex-col justify-center gap-8
    "
    >
      <div className=" w-full gap-4 flex items-center relative">
        <Input className=" w-full " />
        <Input className=" w-full " />
        <Input className=" w-full " />
      </div>
      <div className=" w-full px-12 md:px-24 lg:px-28">
        <Button
          variant={"search"}
          className=" w-full font-bold 
        text-xl py-2 "
          disabled
        >
          Search
        </Button>
      </div>
    </div>
  );
};
