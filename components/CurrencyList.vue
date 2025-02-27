<template>
  <div class="min-h-screen bg-gray-100 py-10">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-r from-green-500 to-blue-600 text-white py-20 relative overflow-hidden"
    >
      <div class="container mx-auto px-4 text-center relative z-10">
        <h1 class="text-5xl font-bold mb-6">About Nuxt Dojo</h1>
        <p class="text-xl max-w-2xl mx-auto">
          Discover our mission, values, and the people behind Nuxt Dojo. We're
          passionate about creating high-quality merch for developers and tech
          enthusiasts.
        </p>
      </div>
      <!-- Background Image Overlay -->
      <div class="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1587614387466-0a6b0c3f4d7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80"
          alt="Hero Background"
          class="w-full h-full object-cover"
        />
      </div>
    </section>

    <!-- Mission Statement -->
    <section class="container mx-auto px-4 py-16">
      <h2 class="text-4xl font-bold text-gray-800 mb-8 text-center">
        Our Mission
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <MissionCard
          title="Empowering Developers"
          description="At Nuxt Dojo, we believe in empowering developers with tools, resources, and stylish merch that reflects their passion for technology. Our goal is to inspire creativity and innovation in every developer's journey."
        />
        <MissionCard
          title="Quality and Sustainability"
          description="We prioritize quality and sustainability in everything we do. From eco-friendly materials to ethical manufacturing processes, we strive to make a positive impact on both our customers and the planet."
        />
      </div>
    </section>

    <!-- Founder Section -->
    <section class="container mx-auto px-4 py-16 bg-gray-100">
      <h2 class="text-4xl font-bold text-gray-800 mb-8 text-center">
        Meet the Founder
      </h2>
      <FounderCard
        name="Amanuel Yizelkal"
        role="Founder & CEO"
        image="/assets/amanuel.jpg"
        description="Amanuel is a passionate developer and entrepreneur dedicated to building tools and resources that empower the tech community."
      />
    </section>
  </div>
</template>

<script setup>
import MissionCard from "~/components/MissionCard.vue";
import FounderCard from "~/components/FounderCard.vue";
</script>

<style scoped>
/* Additional custom styles */
</style>
