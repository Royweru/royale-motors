"use client";
import React, { useEffect, useState } from "react";
import { SearchBox } from "../search-box";

import { CarType, MakeType } from "@/types";
import { Make, Model, Type } from "@prisma/client";

export const BrowseHero = ({
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
      className='w-full bg-[url("/hero1.jpg")] h-[200px] bg-cover bg-center
      flex flex-col  md:justify-between  justify-evenly items-center gap-4 lg:px-12 px-4 md:px-10
     
    '
    >
      {/* <div className=" absolute inset-0 w-full bg-black/50 opacity-75 size-full " /> */}

      <div />
      <div className=" w-full text-center">
        <h2
          className="  text-3xl lg:text-5xl font-bold 
        text-balance text-white font-sans w-full tracking-wide"
        >
          Get your dream car today, what are you waiting for ?
        </h2>
      </div>
      <SearchBox models={models} makes={makes} bodyTypes={bodyTypes} />
    </div>
  );
};
