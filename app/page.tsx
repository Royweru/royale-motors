import { fetchSingleCar } from "@/actions/GetCar";
import { fetchCars } from "@/actions/GetCars";
import { fetchMakes } from "@/actions/GetMakes";
import { fetchModels } from "@/actions/GetModels";
import { fetchTypes } from "@/actions/GetTypes";

import { CarCard } from "@/components/car-card";
import { Contact } from "@/components/contact";
import { Faq } from "@/components/FAQ";
import { FinanceFeature } from "@/components/feature/finance";
import { Test } from "@/components/feature/test";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import Link from "next/link";
export default async function Home() {
  const cars = await fetchCars();
  const models = await fetchModels();
  const makes = await fetchMakes();
  const bodytypes = await fetchTypes();

  return (
    <div className="  h-full relative w-full">
      <Hero models={models} makes={makes} bodyTypes={bodytypes} />
      <FinanceFeature />
      <Test />
      <Faq />
      <Contact />
    </div>
  );
}
