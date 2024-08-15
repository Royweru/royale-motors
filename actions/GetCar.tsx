export async function fetchSingleCar(carId: number) {
  // JavaScript Example: Fetch Single Post
  // This function demonstrates how to fetch a single post using the Fetch API.

  const url = "https://freetestapi.com/api/v1/cars/" + carId;
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("HTTP error! Status: " + response.status);
    }

    const post = await response.json();
    return post;
  } catch (error) {
    throw new Error("Error fetching single car: " + error);
  }
}
