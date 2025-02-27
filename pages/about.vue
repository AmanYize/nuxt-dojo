<template>
  <div class="min-h-screen bg-gray-100 py-10">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-r from-green-500 to-blue-600 text-white py-20 relative overflow-hidden"
    >
      <div class="container mx-auto px-4 text-center relative z-10">
        <h1 class="text-6xl font-bold mb-6 animate-pulse">About Nuxt Dojo</h1>
        <p class="text-xl max-w-2xl mx-auto">
          Discover our mission, values, and the people behind Nuxt Dojo. We're
          passionate about creating high-quality merch for developers and tech
          enthusiasts.
        </p>
      </div>
      <!-- Background Image Overlay -->
      <div class="absolute inset-0 opacity-30">
        <img
          src="https://images.unsplash.com/photo-1587614387466-0a6b0c3f4d7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80"
          alt="Hero Background"
          class="w-full h-full object-cover"
        />
      </div>
      <!-- Particle Animation -->
      <canvas id="hero-canvas" class="absolute inset-0"></canvas>
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
        description="Amanuel is a passionate developer and entrepreneur dedicated to building tools and resources that empower the tech community. With years of experience in software development and a love for open-source projects, he founded Nuxt Dojo to bridge the gap between technology and creativity."
      />
    </section>

    <!-- Milestones Timeline -->
    <section class="container mx-auto px-4 py-16">
      <h2 class="text-4xl font-bold text-gray-800 mb-8 text-center">
        Our Journey
      </h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-content">
            <h3 class="text-2xl font-bold text-green-600">2020</h3>
            <p>
              Nuxt Dojo was founded with a vision to create high-quality
              developer merch.
            </p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content">
            <h3 class="text-2xl font-bold text-green-600">2021</h3>
            <p>Launched our first collection of eco-friendly products.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content">
            <h3 class="text-2xl font-bold text-green-600">2022</h3>
            <p>Expanded globally and partnered with major tech communities.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content">
            <h3 class="text-2xl font-bold text-green-600">2023</h3>
            <p>Reached over 10,000 happy customers worldwide!</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="container mx-auto px-4 py-16 bg-gray-50">
      <h2 class="text-4xl font-bold text-gray-800 mb-8 text-center">
        What People Say
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TestimonialCard
          name="John Doe"
          role="Fullstack Developer"
          quote="Nuxt Dojo's products are amazing! The quality is unmatched, and the designs are perfect for any developer."
        />
        <TestimonialCard
          name="Jane Smith"
          role="Tech Enthusiast"
          quote="I love how sustainable their products are. It's great to support a company that cares about the environment."
        />
        <TestimonialCard
          name="Alex Johnson"
          role="Open Source Contributor"
          quote="The founder's vision truly resonates with me. Nuxt Dojo is more than just merch—it's a movement!"
        />
      </div>
    </section>

    <!-- Call to Action -->
    <section
      class="container mx-auto px-4 py-16 bg-green-600 text-white rounded-lg shadow-lg"
    >
      <h2 class="text-4xl font-bold text-center mb-6">Join the Movement</h2>
      <p class="text-lg text-center mb-8">
        Be part of the Nuxt Dojo community and discover the tools and resources
        that empower developers worldwide.
      </p>
      <div class="flex justify-center space-x-4">
        <!-- Join Discord Button -->
        <a
          href="https://discord.gg/kfe325aG"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-green-100 transition duration-300"
        >
          <span class="material-icons mr-2">forum</span>
          Join Our Discord Server
        </a>

        <!-- Optional Secondary Button -->
        <button
          @click="handleGetStarted"
          class="bg-green-700 text-white px-8 py-3 rounded-full font-bold hover:bg-green-800 transition duration-300"
        >
          Get Started
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import MissionCard from "~/components/MissionCard.vue";
import FounderCard from "~/components/FounderCard.vue";
import TestimonialCard from "~/components/TestimonialCard.vue";

// Add particle animation to hero section
onMounted(() => {
  const canvas = document.getElementById("hero-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
      };
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    function updateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX *= -1;
        }
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY *= -1;
        }
      });

      requestAnimationFrame(updateParticles);
    }

    updateParticles();
  }
});

// Handle Get Started Button Click
function handleGetStarted() {
  alert(
    "Thank you for joining us! Explore our products and become part of the community."
  );
}
</script>

<style scoped>
/* Additional custom styles */
.animate-pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
