<script setup>
import Intro from "./Intro.vue";
import Experience from "./Experience.vue";
import Projects from "./Projects.vue";
import Links from "./Links.vue";
import AvatarImage from "../assets/ava.jpeg";
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4 items-center">
      <div class="shrink-0 w-[88px] h-[88px] rounded-full overflow-hidden">
        <img
          :src="AvatarImage"
          alt="Thai Ho"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="text-center sm:text-left">
        <h1 class="mb-1 text-2xl font-bold">Thai Ho</h1>
        <p class="text-sm text-gray-400">Front-end Developer</p>
      </div>
    </div>
    <Intro />
    <Experience />
    <Projects />
    <Links />
  </div>
</template>

<style scoped>
@media (max-width: 512px) {
  h1 {
    font-size: 1.75rem;
  }
}
</style>
