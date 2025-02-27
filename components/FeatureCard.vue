<template>
  <div class="bg-white rounded-lg shadow-md p-6 text-center">
    <div class="text-4xl mb-4 text-green-600">{{ icon }}</div>
    <h3 class="text-xl font-bold text-gray-800 mb-2">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
/* Optional: Add hover effect for interactivity */
</style>
