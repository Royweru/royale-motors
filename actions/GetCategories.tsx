import { Category } from "@prisma/client";
import axios from "axios";

export const GetCategories = async (): Promise<Category[]> => {
  
  try {
    const response = await axios.get("http://localhost:3000/api/category");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching Categories: " + error);
  }
};
