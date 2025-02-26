<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consequatur
      culpa esse eveniet. Nemo, consectetur eum esse nihil obcaecati inventore?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consequatur
      culpa esse eveniet. Nemo, consectetur eum esse nihil obcaecati inventore?
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data, error } = await useFetch("/api/currency/GBP");

if (error.value) {
  console.error("Error fetching data:", error.value);
}
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
