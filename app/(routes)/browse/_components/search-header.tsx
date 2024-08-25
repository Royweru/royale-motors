"use client";
import { fetchMakes } from "@/actions/GetMakes";
import { fetchModels } from "@/actions/GetModels";
import { Make, Model, Type } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import qs from "query-string";
import React, { useEffect, useState } from "react";

export const SearchHeader = ({
  makes,
  models,
  bodyTypes,
}: {
  makes: Make[];
  models: Model[];
  bodyTypes: Type[];
}) => {
  const params = useSearchParams();
  const unstructuredUrl = qs.parse(params.toString());

  const make = makes.find((make) => make.id === unstructuredUrl.make);
  const model = models.find((model) => model.id === unstructuredUrl.model);
  const bodyType = bodyTypes.find((type) => type.id === unstructuredUrl.typeId);

  return (
    <div className="  container ">
      <div className="w-full relative flex flex-col gap-y-4 md:gap-y-6 justify-center items-center">
        <div className=" underline italic text-black">
          <h5 className="   text-md tracking-wide font-bold text-white">
            Currently showing :
          </h5>
        </div>
        <div className=" w-full flex px-20 md:px-24 lg:px-30 flex-wrap justify-evenly  gap-7 ">
          {unstructuredUrl.make && (
            <div className=" py-2 px-7 lg:px-12 lg:py-3 bg-white rounded-2xl">
              <p className=" font-semibold text-sm lg:text-xl text-red-secondary">
                {make?.name}
              </p>
            </div>
          )}

          {unstructuredUrl.model && (
            <div className=" py-2 px-7 lg:px-12 lg:py-3 bg-white rounded-2xl">
              <p className=" font-semibold text-sm lg:text-xl text-red-secondary">
                {model?.name}
              </p>
            </div>
          )}

          {unstructuredUrl.typeId && (
            <div className=" py-2 px-7 lg:px-12 lg:py-3 bg-white rounded-2xl">
              <p className=" font-semibold text-sm lg:text-xl text-red-secondary">
                {bodyType ? bodyType.name : "Body type"}
              </p>
            </div>
          )}

          {unstructuredUrl.year && (
            <div className=" py-2 px-7 lg:px-12 lg:py-3 bg-white rounded-2xl">
              <p className=" font-semibold text-sm lg:text-xl text-red-secondary">
                {unstructuredUrl.year
                  ? unstructuredUrl.year
                  : "Year of Manufacture"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
