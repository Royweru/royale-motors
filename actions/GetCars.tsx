import { Car } from "@prisma/client";
import axios from "axios";
import qs from "query-string";

interface Query {
  makeId?: string;
  modelId?: string;
  year?: string;
  typeId?: string;
}

export const fetchCars = async (query: Query): Promise<Car[]> => {
  const stringifiedUrl = qs.stringifyUrl(
    {
      url: `${window.location.href}api/cars`,
      query: {
        makeId: query.makeId,
        modelId: query.modelId,
        year: query.year,
        typeId: query.typeId,
      },
    },
    { skipNull: true }
  );

  try {
    const response = await axios.get(stringifiedUrl);
    if (response.status === 200) {
      console.log(response.data);
    }
    return response.data;
  } catch (error) {
    throw new Error("Error fetching Cars: " + error);
  }
};
