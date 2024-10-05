import { Model } from "@prisma/client";
import db from "@/lib/prisma";

export const GetModels = async (): Promise<Model[]> => {
  try {
    const res = await db.model.findMany({
      include: {
        cars: true,
      },
    });
    return res;
  } catch (error) {
    console.error(error);
    return [];
  }
};
