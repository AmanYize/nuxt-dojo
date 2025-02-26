<template>
  <div>
    <!-- Header Section -->
    <header class="shadow-md bg-white">
      <nav
        class="container mx-auto px-4 py-6 flex justify-between items-center"
      >
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="text-2xl font-bold text-gray-800 hover:text-green-600 transition duration-300"
        >
          Nuxt Dojo
        </NuxtLink>

        <!-- Navigation Links (Visible on Larger Screens) -->
        <ul class="hidden md:flex gap-6 items-center">
          <li>
            <NuxtLink
              to="/"
              class="text-gray-700 hover:text-green-600 transition duration-300"
              :class="{ 'text-green-600': $route.path === '/' }"
            >
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="text-gray-700 hover:text-green-600 transition duration-300"
              :class="{ 'text-green-600': $route.path === '/about' }"
            >
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/products"
              class="btn bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Products
            </NuxtLink>
          </li>
        </ul>

        <!-- Search Bar -->
        <form @submit.prevent="handleSearch" class="relative w-full max-w-md">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search products..."
            class="w-full px-4 py-2 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500 transition duration-300"
          />
          <button
            type="submit"
            class="absolute right-2 top-1/2 -translate-y-1/2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </form>

        <!-- Navigation Links (Visible on Smaller Screens) -->
        <ul class="md:hidden flex gap-4 items-center">
          <li>
            <NuxtLink
              to="/"
              class="text-gray-700 hover:text-green-600 transition duration-300"
              :class="{ 'text-green-600': $route.path === '/' }"
            >
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="text-gray-700 hover:text-green-600 transition duration-300"
              :class="{ 'text-green-600': $route.path === '/about' }"
            >
              About
            </NuxtLink>
          </li>
          <li>
            <button class="btn">
              <NuxtLink
                to="/products"
                class="text-gray-700 hover:text-green-600 transition duration-300"
                :class="{ 'text-green-600': $route.path === '/prodcuts' }"
              >
                <span class="text-white">Products</span>
              </NuxtLink>
            </button>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

// Reactive state for the search query
const searchQuery = ref("");

// Access the router for navigation
const router = useRouter();

// Handle search submission
const handleSearch = () => {
  if (searchQuery.value.trim()) {
    // Navigate to the search results page with the query as a parameter
    router.push(`/search?query=${encodeURIComponent(searchQuery.value)}`);
  }
};
</script>

<style scoped>
/* Responsive Styles */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
  }

  ul {
    margin-top: 1rem;
    width: 100%;
  }

  form {
    margin-top: 1rem;
    width: 100%;
  }
}
</style>
