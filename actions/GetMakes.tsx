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

    return res;
  } catch (error) {
    console.error(error);
    return [];
  }
};
