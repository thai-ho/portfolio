<script setup>
import Intro from "./components/Intro.vue";
import Experience from "./components/Experience.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="flex gap-2 items-center">
    <div class="shrink-0 w-[48px] h-[48px] bg-gray-300 rounded-full"></div>
    <div>
      <h1 class="text-2xl font-bold">Thai Ho</h1>
      <p class="text-sm text-gray-500">Frontend Developer</p>
    </div>
  </div>
  <Intro />
  <Experience />
  <Footer />
</template>
