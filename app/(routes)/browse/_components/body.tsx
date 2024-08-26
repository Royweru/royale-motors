"use client";
import Image from "next/image";
import qs from "query-string";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export const Body = ({
  imgSrc,
  label,
  id,
}: {
  label: string;
  id: string;
  imgSrc: string;
}) => {
  const router = useRouter();
  const pathName = usePathname();
  const [typeId, setTypeId] = useState("");
  const params = useSearchParams();
  const URL =
    pathName === "/"
      ? `${window.location.href}browse`
      : `${window.location.href}`;
  const onSearch = (id: string) => {
    let query = {};
    if (params) {
      query = qs.parse(params.toString());
    }
    const updatedQuery: any = {
      ...query,
      typeId: id,
    };
    if (params?.get("typeId") === typeId) {
      delete updatedQuery.typeId;
    }
    const pushUrl = qs.stringifyUrl(
      {
        url: URL,
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(pushUrl);
  };
  return (
    <div
      className=" flex flex-col gap-y-1 font-bold"
      onClick={() => onSearch(id)}
    >
      <div
        className=" w-[100px] h-[100px] relative hover:opacity-75 
    cursor-pointer "
      >
        <Image
          src={imgSrc}
          alt="Body type"
          fill
          className=" object-contain object-center"
        />
      </div>
      <p
        className=" 
         text-center
         w-full
         relative
         text-txt-accent"
      >
        {label}
      </p>
    </div>
  );
};
