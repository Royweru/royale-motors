import { fetchSingleCar } from "@/actions/GetCar";
import { fetchCars } from "@/actions/GetCars";

import { CarCard } from "@/components/car-card";
import { Hero } from "@/components/hero";
import Link from "next/link";
export default async function Home() {
  const cars = await fetchCars();

  return (
    <div className="  h-full relative w-full">
      <Hero />
    </div>
  );
}
