import React from "react";

export const Header = ({
  make,
  model,
  color,
}: {
  make: string;
  model: string;
  color: string;
}) => {
  return (
    <div className=" w-full flex justify-between items-center ">
      <div className=" flex flex-col gap-1">
        <p className=" text-md text-red-primary font-light">{make}</p>
        <h4 className=" h4 ">{model}</h4>
      </div>

      <div className=" flex gap-1 px-3 items-center">
        <p className=" text-sm font-extrabold text-white-grey">Color :</p>
        <div
          className=" p-4 rounded-2xl"
          style={{ backgroundColor: `${color}` }}
        />
      </div>
    </div>
  );
};
