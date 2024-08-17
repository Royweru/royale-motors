import React from "react";
import { SearchBox } from "../search-box";

export const Hero = () => {
  return (
    <div
      className='w-full bg-[url("/hero1.jpg")] md:h-[450px] h-[350px] bg-cover bg-center
      flex flex-col md:flex-row md:justify-between  justify-evenly items-center gap-4 lg:px-12 px-4 md:px-10
     
    '
    >
      <div className=" w-full"></div>
      <SearchBox />
    </div>
  );
};
