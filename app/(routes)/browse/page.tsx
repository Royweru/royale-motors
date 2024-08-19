import { fetchCars } from "@/actions/GetCars";
import { Hero } from "@/components/hero";
import React from "react";
import { CheckFinance } from "./_components/check-finance";

const BrowsePage = async () => {
  const cars = await fetchCars();
  return (
    <div className=" w-full h-full">
      <Hero cars={cars} />
      <CheckFinance />
    </div>
  );
};

export default BrowsePage;
