<template>
  <div class="min-h-screen bg-gray-100 py-10">
    <!-- Search Results Section -->
    <section class="container mx-auto px-4">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Search Results</h1>
      <p v-if="query" class="text-gray-600 mb-8">
        You searched for: "{{ query }}"
      </p>

      <!-- Display Search Results -->
      <div
        v-if="results.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div
          v-for="product in results"
          :key="product.id"
          class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
        >
          <!-- Product Image -->
          <NuxtLink :to="`/products/${product.id}`" class="block">
            <img
              :src="product.image"
              alt="Product Image"
              class="w-full aspect-square object-contain bg-gray-100"
            />
          </NuxtLink>
          <!-- Product Details -->
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800 line-clamp-2">
              {{ product.title }}
            </h3>
            <p class="text-gray-600 mt-2">${{ product.price }}</p>
            <NuxtLink
              :to="`/products/${product.id}`"
              class="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
            >
              View Details
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- No Results Found -->
      <div v-else class="text-center text-gray-600">
        <p class="text-xl font-semibold">No results found for "{{ query }}".</p>
        <p class="mt-4">
          Try searching for something else or browse our products.
        </p>
        <NuxtLink
          to="/products"
          class="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Browse All Products
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

// Get the search query from the URL
const route = useRoute();
const query = ref(route.query.query || "");
const results = ref([]);

// Function to fetch search results
const fetchResults = async () => {
  if (query.value) {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      // Filter products based on the query
      results.value = data.filter((product) =>
        product.title.toLowerCase().includes(query.value.toLowerCase())
      );
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  } else {
    results.value = []; // Clear results if no query
  }
};

// Fetch results when the component is mounted
fetchResults();

// Watch for changes in the query parameter
watch(
  () => route.query.query,
  (newQuery) => {
    query.value = newQuery || ""; // Update the query
    fetchResults(); // Re-fetch results
  }
);
</script>

<style scoped>
/* Line Clamp for Product Titles */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
