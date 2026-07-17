<template>
  <div class="min-h-screen flex flex-col bg-black text-white">
    <!-- Main content area -->
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Native footer at the app level -->
    <footer class="mt-24 pt-8 text-center">
      <p class="text-sm text-gray-500">Thank you for visiting my portfolio!</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import "@v1/assets/main.css";
</script>

<style>
body {
  margin: 0;
  background-color: #000;
  color: #fff;
}
</style>
