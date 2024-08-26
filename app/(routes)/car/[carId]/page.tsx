import React from "react";
import { CarHead } from "./_components/car-head";
import { fetchSingleCar } from "@/actions/GetCar";
import { WarrantyOption } from "./_components/warranty-option";
import { FinanceFeature } from "@/components/feature/finance";
import { Test } from "@/components/feature/test";
import { fetchCars } from "@/actions/GetCars";

const CarIdPage = async ({ params }: { params: { carId: string } }) => {
  const cars = await fetchCars({});

  const car = cars.find((car) => car.id === params.carId);

  return (
    <div className=" w-full h-full flex flex-col items-center justify-center">
      <CarHead data={car} />
      <WarrantyOption />
      <FinanceFeature />
      <Test />
    </div>
  );
};

export default CarIdPage;
