<template>
  <div class="min-h-screen bg-gray-100 py-10">
    <section class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Product Image -->
        <div class="flex justify-center">
          <div
            class="aspect-w-3 aspect-h-4 w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-md"
          >
            <img
              :src="product.image"
              :alt="product.title"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- Product Details -->
        <div class="p-6">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            {{ product.title }}
          </h2>
          <p class="text-xl text-green-600 font-bold mb-4">
            ${{ product.price }}
          </p>
          <h3 class="font-bold border-b-2 mb-4 pb-2">Product Description</h3>
          <p class="text-gray-600 mb-6">{{ product.description }}</p>

          <!-- Product Options -->
          <div class="space-y-4 mb-6">
            <!-- Quantity -->
            <div>
              <label class="block text-gray-700 font-bold mb-2">Quantity</label>
              <input
                type="number"
                v-model="quantity"
                min="1"
                class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <!-- Size -->
            <div>
              <label class="block text-gray-700 font-bold mb-2">Size</label>
              <select
                v-model="selectedSize"
                class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="S">Small (S)</option>
                <option value="M">Medium (M)</option>
                <option value="L">Large (L)</option>
                <option value="XL">Extra Large (XL)</option>
              </select>
            </div>

            <!-- Color -->
            <div>
              <label class="block text-gray-700 font-bold mb-2">Color</label>
              <div class="flex space-x-4">
                <button
                  v-for="color in colors"
                  :key="color"
                  @click="selectedColor = color"
                  :class="[
                    'w-8 h-8 rounded-full border-2',
                    selectedColor === color
                      ? 'border-green-500'
                      : 'border-gray-300',
                  ]"
                  :style="{ backgroundColor: color }"
                ></button>
              </div>
            </div>
          </div>

          <!-- Add to Cart Button -->
          <button
            @click="addToCart"
            class="w-full bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300 flex items-center justify-center"
          >
            <i class="material-icons mr-2">add_shopping_cart</i>
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "~/stores/cart";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

// Cart Store
const cartStore = useCartStore();

// Local State
const quantity = ref(1);
const selectedSize = ref("M");
const selectedColor = ref("#000000");
const colors = ["#000000", "#FFFFFF", "#FF0000", "#0000FF", "#FFFF00"];

// Add to Cart
function addToCart() {
  const cartItem = {
    id: props.product.id,
    title: props.product.title,
    price: props.product.price,
    image: props.product.image,
    quantity: quantity.value,
    size: selectedSize.value,
    color: selectedColor.value,
  };

  cartStore.addToCart(cartItem);
  alert("Product added to cart!");
}
</script>

<style scoped>
/* Ensure the image container doesn't overflow */
.aspect-w-3.aspect-h-4 img {
  max-width: 100%;
  height: auto;
}
</style>
