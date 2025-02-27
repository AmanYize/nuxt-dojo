<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h3 class="text-2xl font-semibold text-gray-700 mb-4">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
});
</script>
