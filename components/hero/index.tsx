"use client";
import React, { useEffect, useState } from "react";
import { SearchBox } from "../search-box";

import { CarType, MakeType } from "@/types";
import { Make, Model, Type } from "@prisma/client";

export const Hero = ({
  models,
  makes,
  bodyTypes,
}: {
  models: Model[];
  makes: MakeType[];
  bodyTypes: Type[];
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <div
      className='w-full bg-[url("/hero1.jpg")] md:h-[450px] h-[350px] bg-cover bg-center
      flex flex-col md:flex-row md:justify-between  justify-evenly items-center gap-4 lg:px-12 px-4 md:px-10
     
    '
    >
      <div className=" w-full  px-6 md:px-12">
        <h2 className=" lg:h1 h2 text-white">
          Get your dream car today, what are you waiting for ?
        </h2>
      </div>
      <SearchBox models={models} makes={makes} bodyTypes={bodyTypes} />
    </div>
  );
};
