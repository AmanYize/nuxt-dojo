<template>
  <div class="flex flex-col items-center text-center">
    <img
      :src="image"
      :alt="name"
      class="w-40 h-40 rounded-full object-cover border-4 border-green-500 shadow-lg"
    />
    <h3 class="text-2xl font-semibold text-gray-800 mt-6">{{ name }}</h3>
    <p class="text-gray-600">{{ role }}</p>
    <p class="text-gray-600 mt-4 max-w-md mx-auto">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  role: String,
  image: String,
  description: String,
});
</script>
