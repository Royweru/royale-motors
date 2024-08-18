import { fetchSingleCar } from "@/actions/GetCar";
import { fetchCars } from "@/actions/GetCars";

import { CarCard } from "@/components/car-card";
import { Faq } from "@/components/FAQ";
import { FinanceFeature } from "@/components/feature/finance";
import { Test } from "@/components/feature/test";
import { Hero } from "@/components/hero";
import Link from "next/link";
export default async function Home() {
  const cars = await fetchCars();

  return (
    <div className="  h-full relative w-full">
      <Hero />
      <FinanceFeature />
      <Test />
      <Faq />
    </div>
  );
}
