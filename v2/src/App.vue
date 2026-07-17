<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import "@v2/assets/main.css";
import Header from "@v2/components/Header.vue";
import Footer from "@v2/components/Footer.vue";
</script>
