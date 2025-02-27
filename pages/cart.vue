<template>
  <div class="min-h-screen bg-gray-100 py-10">
    <section class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-gray-800 mb-8">Your Cart</h1>

      <!-- Cart Items -->
      <div v-if="cartItems.length > 0" class="space-y-6">
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="bg-white rounded-lg shadow-md p-6 flex items-center"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="w-24 h-24 object-cover rounded-md mr-6"
          />
          <div class="flex-1">
            <h3 class="text-lg font-bold text-gray-800">{{ item.title }}</h3>
            <p class="text-gray-600">Price: ${{ item.price }}</p>
            <p class="text-gray-600">Quantity: {{ item.quantity }}</p>
            <p class="text-gray-600">Size: {{ item.size }}</p>
            <p class="text-gray-600">
              Color:
              <span
                :style="{ backgroundColor: item.color }"
                class="inline-block w-4 h-4 rounded-full"
              ></span>
            </p>
          </div>
          <button
            @click="removeFromCart(item.id)"
            class="text-red-500 hover:text-red-700 transition duration-300"
          >
            Remove
          </button>
        </div>
      </div>

      <!-- Empty Cart Message -->
      <div v-else class="text-center text-gray-600">
        <p>Your cart is empty.</p>
        <NuxtLink
          to="/products"
          class="text-green-600 hover:underline mt-4 inline-block"
        >
          Continue Shopping
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();
const cartItems = cartStore.cart;

// Remove Item from Cart
function removeFromCart(productId) {
  cartStore.removeFromCart(productId);
}
</script>
