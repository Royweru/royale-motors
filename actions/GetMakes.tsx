import { MakeType } from "@/types";
import { Make } from "@prisma/client";
import axios from "axios";

export const fetchMakes = async (): Promise<MakeType[]> => {
  // JavaScript Example: Fetch Single car
  // This function demonstrates how to fetch a single car using the Fetch API.

  try {
    const response = await axios.get("http://localhost:3000/api/make");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching Makes: " + error);
  }
};
