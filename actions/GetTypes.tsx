import { Type } from "@prisma/client";
import db from '@/lib/prisma'


export const GetTypes = async (): Promise<Type[]> => {
  // JavaScript Example: Fetch Single car
  // This function demonstrates how to fetch a single car using the Fetch API.

  try {
     const res = await db.type.findMany({
      include:{
        cars:true
      }
     })
     return res
  } catch (error) {
    console.error(error)
    return []
  }
};
