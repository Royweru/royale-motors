import { fetchCars } from "@/actions/GetCars";
import { Hero } from "@/components/hero";
import React from "react";
import { CheckFinance } from "./_components/check-finance";
import { BodyFilter } from "./_components/body-filter";
import { SearchHeader } from "./_components/search-header";
import { CarDisplay } from "@/components/car-display";
import { Test } from "@/components/feature/test";

const BrowsePage = async () => {
  const cars = await fetchCars();
  return (
    <div className=" w-full h-full">
      <Hero cars={cars} />
      <BodyFilter />

      <CheckFinance />
      <SearchHeader />
      <CarDisplay cars={cars} />
      <Test />
    </div>
  );
};

export default BrowsePage;
