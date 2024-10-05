import { MakeType } from "@/types";
import db from "@/lib/prisma";
import axios from "axios";

export const GetMakes = async (): Promise<MakeType[]> => {
  // JavaScript Example: Fetch Single car
  // This function demonstrates how to fetch a single car using the Fetch API.

  try {
    const res = await db.make.findMany({
      include: {
        cars: true,
        models: true,
      },
    });

    const toNearest = (num: number | null | undefined|any, precision: number) => {
      if (num == null) return null;
      const factor = Math.pow(10, precision);
      return Math.round(num * factor) / factor;
    };

    const modifiedRes = res.map((make)=>{

      const modifiedMakeCars = make.cars.map((car)=>{
        const modifiedRentalPrice = toNearest(car.rentalPrice, 4);
      const modifiedPrice = toNearest(car.price, 4);
      const modifiedAcceleration = toNearest(car.acceleration, 5);

      return{
        ...car,
        price: modifiedPrice,
        rentalPrice: modifiedRentalPrice,
        acceleration: modifiedAcceleration,
      }
      })
    return {
      ...make,
      cars:modifiedMakeCars
    }
    })
    return modifiedRes
  } catch (error) {
    console.error(error);
    return [];
  }
};
