<template>
  <article
    class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-[20rem] flex flex-col"
  >
    <!-- Product Image Container -->
    <div class="relative aspect-[4/3] bg-gray-100">
      <img
        :src="product.image"
        :alt="product.title"
        class="w-full h-full object-cover object-center"
        loading="lazy"
      />
    </div>

    <!-- Content Container -->
    <div class="p-5 flex-1 flex flex-col gap-3">
      <!-- Title -->
      <h3 class="text-lg font-bold text-gray-900 line-clamp-2 leading-snug">
        {{ product.title }}
      </h3>

      <!-- Price -->
      <p class="text-xl font-extrabold text-green-700">
        ${{ product.price.toFixed(2) }}
      </p>

      <!-- Description -->
      <p class="text-gray-600 text-sm line-clamp-3 mb-2">
        {{ product.description }}
      </p>

      <!-- Button -->
      <button
        @click="$emit('view-details')"
        class="mt-auto w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
      >
        View Details
      </button>
    </div>
  </article>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>
