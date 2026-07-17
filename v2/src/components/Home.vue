<template>
  <div class="flex flex-col gap-0">
    <Hero />
    <Experience />
    <Projects />
    <Links />
  </div>
</template>

<script setup lang="ts">
import Hero from "@v2/components/Hero.vue";
import Experience from "@v2/components/Experience.vue";
import Projects from "@v2/components/Projects.vue";
import Links from "@v2/components/Links.vue";
</script>
