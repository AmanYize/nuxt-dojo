<template>
  <div class="min-h-screen bg-gray-100 py-10">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-r from-green-500 to-blue-600 text-white py-20"
    >
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl font-bold mb-4">Our Products</h1>
        <p class="text-xl max-w-2xl mx-auto">
          Discover our exclusive collection of high-quality merch designed for
          developers and tech enthusiasts.
        </p>
      </div>
    </section>

    <!-- Product Grid -->
    <section class="container mx-auto px-4 py-16">
      <div
        v-if="loading"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        <!-- Skeleton Loader -->
        <div
          v-for="i in 8"
          :key="i"
          class="bg-white rounded-lg shadow-md p-6 animate-pulse"
        >
          <div class="aspect-w-3 aspect-h-4 bg-gray-300 rounded-md mb-4"></div>
          <div class="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div class="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>

      <div
        v-else
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        <!-- Product Cards -->
        <div
          v-for="product in products"
          :key="product.id"
          class="flex justify-center"
        >
          <ProductCard
            :product="product"
            @view-details="navigateToProductDetails(product.id)"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// State variables
const loading = ref(true);
const products = ref([]);

// Fetch products on component mount
onMounted(async () => {
  try {
    const { data, error } = await useFetch("https://fakestoreapi.com/products");
    if (error.value) {
      console.error("Error fetching products:", error.value);
    } else {
      products.value = data.value;
    }
  } catch (err) {
    console.error("Unexpected error fetching products:", err);
  } finally {
    loading.value = false;
  }
});

// Navigate to product details page
function navigateToProductDetails(productId) {
  navigateTo(`/products/${productId}`);
}

useHead({
  title: "Nuxt Dojo | Merch",
  meta: [
    {
      name: "description",
      content:
        "Explore our exclusive collection of high-quality developer merch.",
    },
  ],
});
</script>

<style scoped></style>
