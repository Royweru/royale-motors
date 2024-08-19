async function searchCars(query = "") {
  // JavaScript Example: Search CarssearchCars
  // This function demonstrates how to search for CarssearchCars by title using the Fetch API.

  const apiUrl = "https://freetestapi.com/api/v1/cars";
  const searchQuery = query ? "?search=" + encodeURIComponent(query) : "";
  const url = apiUrl + searchQuery;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("HTTP error! Status:" + response.status);
    }

    const matchingPosts = await response.json();
    return matchingPosts;
  } catch (error) {
    throw new Error("Error searching Cars by make and model: " + error);
  }
}

searchCars("Honda")
  .then((matchingCarssearchCars) => {
    console.log("Matching CarssearchCars:", matchingCarssearchCars);
  })
  .catch((error) => {
    console.error(error);
  });
