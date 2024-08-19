"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";

import { Car } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { YOM } from "@/constants";

export const SearchBox = ({ cars }: { cars: Car[] }) => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const params = useSearchParams();
  const router = useRouter();

  //   const handleClick = useCallback(() => {
  //     let currentQuery = {};
  //     if (params) {
  //       currentQuery = qs.parse(params.toString());
  //     }
  //     const updatedQuery: any = {
  //       ...currentQuery,
  //       category: label,
  //     };
  //     if (params?.get("category") === label) {
  //       delete updatedQuery.category;
  //     }
  //     const url = qs.stringifyUrl(
  //       {
  //         url: "/",
  //         query: updatedQuery,
  //       },
  //       { skipNull: true }
  //     );
  //     router.push(url);
  //   }, [label, params, router]);

  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery = {
      ...currentQuery,
      make,
      model,
      year,
    };
    const pushUrl = qs.stringifyUrl({
      url: `${window.location.href}browse`,
      query: updatedQuery,
    });
    router.push(pushUrl);
  };

  return (
    <div
      className=" rounded-2xl font-semibold p-4 bg-white w-full h-[225px] relative shadow-medium
     backdrop-blur-md border-2 border-txt-accent flex flex-col justify-center gap-8
    "
    >
      <div className=" w-full gap-4 flex items-center relative">
        <select
          className="w-full rounded-2xl text-black-1 
           bg-blue-accent font-semibold text-xl  p-4
            border-blue-secondary "
          value={make}
          onChange={(e) => setMake(e.target.value)}
          defaultValue={"Select Make"}
        >
          <option value="" disabled>
            Select Make
          </option>
          {cars.map((car) => (
            <option value={car.make} key={car.id}>
              <div className=" relative w-full font-bold text-sm text-black">
                {car.make}
              </div>
            </option>
          ))}
        </select>
        <select
          className=" w-full rounded-2xl text-black-1
         bg-blue-accent font-semibold text-xl p-4 border-blue-secondary "
          defaultValue={"Select Model"}
          value={model}
          onChange={(e) => setModel(e.target.value)}
        >
          <option disabled>Select Model</option>
          {cars.map((car) => (
            <option value={car.model} key={car.id}>
              <div className=" relative w-full font-bold text-sm text-black">
                {car.model}
              </div>
            </option>
          ))}
        </select>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className=" w-full rounded-2xl text-black-1
        bg-blue-accent font-semibold text-xl p-4 border-blue-secondary "
        >
          <option value="year of manufacture">Year of Manufacture</option>
          {YOM.map((yom) => (
            <option
              value={yom}
              key={yom}
              className=" font-bold text-black-1 text-sm"
            >
              {yom}
            </option>
          ))}
        </select>
      </div>
      <div className=" w-full px-12 md:px-24 lg:px-28">
        <Button
          variant={"search"}
          className=" w-full font-bold 
        text-xl py-2 "
          onClick={handleClick}
        >
          Search
        </Button>
      </div>
    </div>
  );
};
