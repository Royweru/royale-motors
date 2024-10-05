import { CarType } from "@/types";
import { Car } from "@prisma/client";
import db from '@/lib/prisma'
import qs from "query-string";

interface Query {
  makeId?: string;
  modelId?: string;
  year?: string;
  typeId?: string;
}

export const GetCars = async (query: Query) => {
 
 try {
  const res = await db.car.findMany({
    where: {
      makeId:query.makeId,
      modelId:query.modelId,
      typeId:query.typeId,
      year:query.year,
      isAvailable: true,
    },
    include: {
      make: true,
      model: true,
      type: true,
      category: true,
      images: true,
      features: true,
    },
  });

  return res
 } catch (error) {
   console.error(error)
   return []
 }
};
