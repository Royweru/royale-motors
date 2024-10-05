import { Type } from "@prisma/client";
import db from '@/lib/prisma'


export const GetTypes = async ()=> {
  // JavaScript Example: Fetch Single car
  // This function demonstrates how to fetch a single car using the Fetch API.

  try {
     const res = await db.type.findMany({
      include:{
        cars:true
      }
     })
     const toNearest = (num: number | null | undefined|any, precision: number) => {
      if (num == null) return null;
      const factor = Math.pow(10, precision);
      return Math.round(num * factor) / factor;
    };

    const modifiedRes = res.map((type)=>{

      const modifiedTypeCars = type.cars.map((car)=>{
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
      ...type,
      cars:modifiedTypeCars
    }
    })
    return modifiedRes
  } catch (error) {
    console.error(error)
    return []
  }
};
