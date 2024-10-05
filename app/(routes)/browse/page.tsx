import { GetCars } from "@/actions/GetCars";
import { Hero } from "@/components/hero";
import React from "react";
import { CheckFinance } from "./_components/check-finance";
import { BodyFilter } from "./_components/body-filter";
import { SearchHeader } from "./_components/search-header";
import { CarDisplay } from "@/components/car-display";
import { Test } from "@/components/feature/test";
import { GetModels } from "@/actions/GetModels";
import { GetMakes } from "@/actions/GetMakes";
import { GetTypes } from "@/actions/GetTypes";
import { Braah_One } from "next/font/google";
import { BrowseHero } from "@/components/hero/browse-hero";

interface props {
  searchParams: {
    typeId?: string;
    makeId?: string;
    modelId?: string;
    year?: string;
  };
}
const BrowsePage = async ({ searchParams }: props) => {
  const cars = await GetCars(searchParams);
  const models = await GetModels();
  const makes = await GetMakes();
  const bodyTypes = await GetTypes();
  return (
    <div className=" w-full h-full">
      <BrowseHero makes={makes} models={models} bodyTypes={bodyTypes} />
      <BodyFilter />
      {/* <CheckFinance /> */}
      <SearchHeader models={models} makes={makes} bodyTypes={bodyTypes} />
      <CarDisplay cars={cars} />
      <Test />
    </div>
  );
};

export default BrowsePage;
