import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const CheckFinance = () => {
  return (
    <div className=" w-full py-10 md:py-12 rounded-3xl px-8 md:px-12 lg:px-16 bg-txt-primary md:my-2 my-1">
      <div className=" w-full relative grid md:grid-cols-4 gap-4 md:gap-2">
        <div className=" col-span-1 md:col-span-2 lg:col-span-1 flex items-center justify-center">
          <img src="/anime1.png" alt="" width={250} height={250} />
        </div>
        <div className=" md:col-span-2 lg:col-span-3 flex flex-col h-full relative items-center justify-center gap-y-2">
          <h2 className=" md:h1 h2 text-red-primary">
            Check out our finance options
          </h2>
          <p className=" font-light md:text-xl text-sm text-black ">
            We offer flexible financing options to help you get behind the wheel
          </p>
          <div className=" w-full relative mt-1 lg:mt-3">
            <Button
              variant={"ghost"}
              className=" lg:text-md text-sm w-full font-bold text-black-1"
            >
              <Link href={"/finance"}>Learn more....</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
