"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import qs from "query-string";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Car } from "@/types";

export const SearchBox = ({ cars }: { cars: Car[] }) => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(0);

  const makes = [
    { make: "Toyota" },
    { make: "BMW" },
    { make: "Mercedez" },
    { make: "Rolls" },
    { make: "Wagon" },
    { make: "Volkswagen" },
  ];

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
    console.log("Clicked");
    console.log(make);
  };

  return (
    <div
      className=" rounded-2xl font-semibold p-4 bg-white w-full h-[225px] relative drop-shadow
     backdrop-blur-md border-2 border-black-2 flex flex-col justify-center gap-8
    "
    >
      <div className=" w-full gap-4 flex items-center relative">
        <select
          className="w-full rounded-2xl text-black-1 
           bg-blue-accent font-semibold text-xl p-4 border-blue-secondary"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          defaultValue={"Select Make"}
        >
          <option value="" disabled>
            Select Make
          </option>
          {makes.map((make) => (
            <option
              key={make.make}
              value={make.make}
              className="font-semibold text-black"
            >
              {make.make}
            </option>
          ))}
        </select>
        <select
          className=" w-full rounded-2xl text-black-1
         bg-blue-accent font-semibold text-xl p-4 border-blue-secondary "
          defaultValue={"Select Model"}
        >
          <option disabled>Select Model</option>
          <option value="Audi">Audi</option>
          <option value="BEnz">Benz</option>
          <option value="Porshe">Porshe</option>
          <option value="Lamboghini">Lambogini</option>
        </select>
        <select
          className=" w-full rounded-2xl text-black-1
        bg-blue-accent font-semibold text-xl p-4 border-blue-secondary "
        >
          <option value="Make">Year of Manufacture</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
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
