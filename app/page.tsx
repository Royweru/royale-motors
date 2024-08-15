import { fetchSingleCar } from "@/actions/GetCar";
import { CarCard } from "@/components/car-card";
export default async function Home() {
  const car = await fetchSingleCar(2);
  console.log(car);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CarCard data={car} />
    </main>
  );
}
