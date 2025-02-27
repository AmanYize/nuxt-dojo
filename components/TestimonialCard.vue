<template>
  <div class="bg-white rounded-lg shadow-md p-6 text-center">
    <p class="text-gray-700 italic mb-4">"{{ quote }}"</p>
    <div class="flex flex-col items-center">
      <h3 class="text-lg font-bold text-gray-800">{{ name }}</h3>
      <p class="text-sm text-gray-500">{{ role }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
});
</script>
<style scoped></style>
