import { Model } from "@prisma/client";
import axios from "axios";

export const fetchModels = async (): Promise<Model[]> => {
  // JavaScript Example: Fetch Single car
  // This function demonstrates how to fetch a single car using the Fetch API.

  try {
    const response = await axios.get("http://localhost:3000/api/model");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching Models " + error);
  }
};
