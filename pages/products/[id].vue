<template>
  <div class="min-h-screen bg-gray-100 py-10">
    <section class="container mx-auto px-4">
      <div v-if="loading" class="flex justify-center py-10">
        <div
          class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-600"
        ></div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Product Image -->
        <div>
          <img
            :src="product.image"
            :alt="product.title"
            class="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <!-- Product Details -->
        <div>
          <h1 class="text-3xl font-bold text-gray-800 mb-4">
            {{ product.title }}
          </h1>
          <p class="text-gray-600 text-lg mb-4">{{ product.description }}</p>
          <p class="text-green-600 font-bold text-2xl mb-6">
            ${{ product.price }}
          </p>
          <button
            class="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute();
const productId = route.params.id;

const loading = ref(true);
const product = ref({});

onMounted(async () => {
  try {
    const { data } = await useFetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    product.value = data.value;
  } catch (error) {
    console.error("Error fetching product details:", error);
  } finally {
    loading.value = false;
  }
});

useHead({
  title: `Nuxt Dojo | ${product.value.title || "Product Details"}`,
  meta: [
    {
      name: "description",
      content: product.value.description || "Product details page.",
    },
  ],
});
</script>
