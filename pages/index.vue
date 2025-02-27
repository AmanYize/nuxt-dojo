<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Hero Section -->
    <section
      class="relative overflow-hidden bg-gradient-to-r from-green-500 to-blue-600 text-white py-20"
    >
      <div class="container mx-auto px-4 text-center relative z-10">
        <h1 class="text-6xl font-bold mb-6">Welcome to Nuxt Dojo</h1>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Discover the best merch for developers and tech enthusiasts. Elevate
          your style with our exclusive collection.
        </p>
        <NuxtLink
          to="/products"
          v-motion
          :initial="{ scale: 1 }"
          :hovered="{ scale: 1.05 }"
          :pressed="{ scale: 0.95 }"
          class="bg-white text-green-600 px-8 py-4 rounded-full font-semibold shadow-lg transition duration-300 hover:bg-gray-100"
        >
          Shop Now
        </NuxtLink>
      </div>
      <!-- Background Image Overlay -->
      <div class="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1587614387466-0a6b0c3f4d7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80"
          alt="Hero Background"
          class="w-full h-full object-cover"
        />
      </div>
    </section>

    <!-- Featured Products Section -->
    <section class="container mx-auto px-4 mt-16">
      <h2 class="text-4xl font-bold text-gray-800 mb-12 text-center">
        Featured Products
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="product in featuredProducts"
          :key="product.id"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 0.6 } }"
          :hovered="{ scale: 1.05 }"
          :pressed="{ scale: 0.95 }"
          class="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300"
        >
          <img
            :src="product.image"
            alt="Product Image"
            class="w-full h-64 object-cover"
          />
          <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-800 line-clamp-2">
              {{ product.title }}
            </h3>
            <p class="text-gray-600 mt-2">${{ product.price }}</p>
            <button
              @click="viewProductDetails(product.id)"
              class="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="bg-gray-900 text-white py-16 mt-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-6">Ready to Elevate Your Style?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Explore our full collection of developer-inspired merch and find the
          perfect gear for you.
        </p>
        <NuxtLink
          to="/products"
          class="bg-green-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-green-700 transition duration-300"
        >
          Browse All Products
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

// Fetch featured products from the API
const featuredProducts = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=4");
    const data = await response.json();
    featuredProducts.value = data;
  } catch (error) {
    console.error("Error fetching featured products:", error);
  }
});

// Router instance for navigation
const router = useRouter();

// Function to navigate to product details page
function viewProductDetails(productId) {
  router.push(`/products/${productId}`);
}
</script>

<style scoped>
/* Additional custom styles if needed */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
