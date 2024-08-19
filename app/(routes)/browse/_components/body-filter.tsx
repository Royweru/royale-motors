import { bodyTypes } from "@/constants";
import { Body } from "./body";
import React from "react";

export const BodyFilter = () => {
  return (
    <div className=" relative w-full  mx-auto flex flex-col items-center justify-between py-4 md:py-6 lg:py-10">
      <div className=" max-w-md">
        <h2 className=" lg:h2  text-md font-bold text-white  ">
          Filter by Body Type
        </h2>
      </div>
      <div className=" flex items-center flex-wrap  justify-evenly md:gap-12">
        {bodyTypes.map((body) => (
          <Body
            key={body.id}
            id={body.id}
            imgSrc={body.imgSrc}
            label={body.label}
          />
        ))}
      </div>
    </div>
  );
};
