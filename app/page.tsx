import { fetchSingleCar } from "@/actions/GetCar";
import { fetchCars } from "@/actions/GetCars";

import { CarCard } from "@/components/car-card";
import Link from "next/link";
export default async function Home() {
  const cars = await fetchCars();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className=" grid grid-cols-7 gap-2 w-full h-full">
        {cars.map((car) => (
          <Link key={car.id} href={`/${car.id}`}>
            <div className=" cursor-pointer hover:opacity-85 font-semibold text-3xl text-white tracking-wide col-span-1">
              {car.make},{" "}
              <span className=" text-xl font-light text-red-500">
                {car.model}
              </span>
            </div>
          </Link>
        ))}
      </div>
      {/* <CarCard data={car} /> */}

      {}
    </main>
  );
}
