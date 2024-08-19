import { Car } from "@/types";

export const fetchCars = async (): Promise<Car[]> => {
  // JavaScript Example: Fetch Single car
  // This function demonstrates how to fetch a single car using the Fetch API.

  const url = "https://freetestapi.com/api/v1/cars/";
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("HTTP error! Status: " + response.status);
    }
    const car = await response.json();

    return car;
  } catch (error) {
    throw new Error("Error fetching Cars: " + error);
  }
};
