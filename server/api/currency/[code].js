// server/api/currency/[code].js
export default defineEventHandler(async (event) => {
  const { code } = event.context.params;
  const { CURRENCY_API_KEY } = process.env;

  if (!CURRENCY_API_KEY) {
    throw createError({
      statusCode: 500,
      statusMessage: "Currency API key is missing",
    });
  }

  try {
    const response = await $fetch(`https://api.currencyapi.com/v3/latest`, {
      query: {
        apikey: CURRENCY_API_KEY,
        currencies: code,
      },
    });

    if (!response || !response.data) {
      throw createError({
        statusCode: 500,
        statusMessage: "Unable to fetch currency data",
      });
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching currency data:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal server error",
    });
  }
});
