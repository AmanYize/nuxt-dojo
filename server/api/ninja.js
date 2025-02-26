export default defineEventHandler(async (event) => {
  if (event.node.req.method === "GET") {
    // More reliable method check
    try {
      // Removed unused query param extraction
      const response = await $fetch(
        "https://api.currencyapi.com/v3/latest?apikey=cur_live_8uqiI1Qa8LsFSKOz1JzFMwjMTUqAhtE8KtKhIfT4"
      );

      return response.data; // Return data from API response
    } catch (error) {
      console.error(error); // Log error for debugging
      throw createError({
        statusCode: 500,
        statusMessage: "Internal Server Error",
      });
    }
  }

  // Handle unsupported methods properly
  throw createError({
    statusCode: 405,
    statusMessage: "Method Not Allowed",
  });
});
