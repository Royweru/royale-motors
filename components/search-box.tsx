"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

import { CarType, MakeType } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { YOM } from "@/constants";
import { Model, Make, Type } from "@prisma/client";

export const SearchBox = ({
  makes,
  models,
  bodyTypes,
}: {
  models: Model[];
  makes: MakeType[];
  bodyTypes: Type[];
}) => {
  const [makeId, setMakeId] = useState("");
  const [selectedModels, setSelectedModels] = useState<Model[]>([]);
  const [modelId, setModelId] = useState("");
  const [year, setYear] = useState("");

  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const selectedMake = makes.find((make) => make.id === makeId);
    const makeModels = selectedMake?.models;
    setSelectedModels(makeModels || []);
  }, [makeId, makes]);

  const isDisabled = !makeId || !modelId;
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
      makeId,
      modelId,
      year,
    };
    const pushUrl = qs.stringifyUrl(
      {
        url: `${window.location.href}browse`,
        query: updatedQuery,
      },
      { skipNull: true }
    );
    router.push(pushUrl);
    setMakeId("");
    setModelId("");
    setYear("");
  };

  return (
    <div
      className=" rounded-2xl py-4 px-4 bg-black md:w-4/5 relative shadow-medium
     backdrop-blur-md border-2 border-txt-accent flex md:flex-col flex-wrap justify-center md:-mb-6 opacity-85
    "
    >
      <div className=" w-full gap-4 flex items-center relative">
        <select
          className="w-full rounded-2xl text-black-1 
           bg-blue-accent font-semibold text-xl px-4 py-2
            border-blue-secondary "
          value={makeId}
          onChange={(e) => setMakeId(e.target.value)}
          defaultValue={" Make"}
        >
          <option value="make" disabled>
            Make
          </option>
          {makes.map((make) => (
            <option value={make.id} key={make.id}>
              <div className=" relative w-full font-black text-sm text-black">
                {make.name}
              </div>
            </option>
          ))}
        </select>
        <select
          className=" w-full rounded-2xl text-black-1
         bg-blue-accent font-semibold text-xl px-4 py-2 border-blue-secondary "
          defaultValue={"Model"}
          value={modelId}
          onChange={(e) => setModelId(e.target.value)}
        >
          <option disabled value={"model"}>
            Model
          </option>
          {selectedModels?.map((model) => (
            <option value={model.id} key={model.id}>
              <div className=" relative w-full font-black text-sm text-black">
                {model.name}
              </div>
            </option>
          ))}
        </select>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className=" w-full rounded-2xl text-black-1
        bg-blue-accent font-semibold text-xl px-4 py-2 border-blue-secondary "
        >
          <option value="year">Year</option>
          {YOM.map((yom) => (
            <option
              value={yom}
              key={yom}
              className=" font-black text-black-1 text-sm"
            >
              {yom}
            </option>
          ))}
        </select>
        <div className=" w-full">
          <Button
            variant={"search"}
            className=" w-full font-black 
        text-xl py-2 "
            onClick={handleClick}
            disabled={isDisabled}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};
