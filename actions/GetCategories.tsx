import { Category } from "@prisma/client";
import db from '@/lib/prisma'

export const GetCategories = async (): Promise<Category[]> => {
  
  try {
    const response = await db.category.findMany({
      include:{
        cars:true
      }
    })
    const toNearest = (num: number | null | undefined|any, precision: number) => {
      if (num == null) return null;
      const factor = Math.pow(10, precision);
      return Math.round(num * factor) / factor;
    };

    const modifiedRes = response.map((category)=>{

      const modifiedCategoryCars = category.cars.map((car)=>{
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
      ...category,
      cars:modifiedCategoryCars
    }
    })
    return modifiedRes
  } catch (error) {
    console.error(error)
      return []
  }
};
