import { fetchCars } from "@/actions/GetCars";
import { Hero } from "@/components/hero";
import React from "react";
import { CheckFinance } from "./_components/check-finance";
import { BodyFilter } from "./_components/body-filter";
import { SearchHeader } from "./_components/search-header";
import { CarDisplay } from "@/components/car-display";
import { Test } from "@/components/feature/test";
import { fetchModels } from "@/actions/GetModels";
import { fetchMakes } from "@/actions/GetMakes";
import { fetchTypes } from "@/actions/GetTypes";

interface props {
  searchParams: {
    typeId?: string;
    makeId?: string;
    modelId?: string;
    year?: string;
  };
}
const BrowsePage = async ({ searchParams }: props) => {
  const cars = await fetchCars(searchParams);
  const models = await fetchModels();
  const makes = await fetchMakes();
  const bodyTypes = await fetchTypes();
  return (
    <div className=" w-full h-full">
      <Hero models={models} makes={makes} bodyTypes={bodyTypes} />
      <BodyFilter />
      {/* <CheckFinance /> */}
      <SearchHeader models={models} makes={makes} bodyTypes={bodyTypes} />
      <CarDisplay cars={cars} />
      <Test />
    </div>
  );
};

export default BrowsePage;
