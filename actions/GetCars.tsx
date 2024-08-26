import { CarType } from "@/types";
import { Car } from "@prisma/client";
import axios from "axios";
import qs from "query-string";

interface Query {
  makeId?: string;
  modelId?: string;
  year?: string;
  typeId?: string;
}

export const fetchCars = async (query: Query): Promise<CarType[]> => {
  const stringifiedUrl = qs.stringifyUrl(
    {
      url: "http://localhost:3000/api/cars",
      query: {
        makeId: query?.makeId,
        modelId: query?.modelId,
        year: query?.year,
        typeId: query?.typeId,
      },
    },
    { skipNull: true, skipEmptyString: true }
  );

  try {
    const response = await fetch(stringifiedUrl, {
      next: { revalidate: 30 },
    });
    if (!response.ok)
      throw new Error("Oopsy the data could not be fetched properly");
    return response.json();
  } catch (error) {
    throw new Error("Error fetching Cars: " + error);
  }
};
