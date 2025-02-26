export default defineEventHandler(async (event) => {
  const { code } = event.context.params;
  const { currencyKey } = useRuntimeConfig();

  // Corrected URL formatting
  const response = await $fetch(
    `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}&currencies=${code}`
  );

  return response.data;
});
