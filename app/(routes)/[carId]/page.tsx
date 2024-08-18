import { fetchSingleCar } from "@/actions/GetCar";
import { fetchCars } from "@/actions/GetCars";
import React from "react";

const CarPage = async ({ params }: { params: { carId: number } }) => {
  const individualCar = await fetchSingleCar(params.carId);
  if (!individualCar)
    return (
      <div className=" text-5xl font-semibold text-red-950"> Nothing!</div>
    );
  return (
    <div className=" w-full h-full container flex flex-col gap-4 ">
      <div>
        <p className=" h4 text-red-primary">
          This are the properties arent they arent they them yes they are they
          are dem they are this
        </p>
      </div>
      {individualCar.features.map((feature: any) => (
        <div
          key={feature}
          className=" p-4 rounded-xl 
          bg-transparent border-2  border-sky-800 
           drop-shadow-lg border-b-4  group
          opacity-90  text-xl text-center
          font-bold text-white cursor-pointer
           hover:opacity-100 hover:animate-pulse"
        >
          <p className=" group-hover:scale-105">{feature}</p>
        </div>
      ))}
    </div>
  );
};

export default CarPage;
