<template>
  <footer class="section py-4">
    <div class="max-w-6xl mx-auto text-center">
      <p>
        &copy; {{ new Date().getFullYear() }} thai-ho. All rights reserved.
      </p>
      <div class="flex justify-center space-x-4 mt-2">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          class="hover:text-gray-200"
        >
          <component :is="link.icon" class="h-6 w-6" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-vue-next";

const socialLinks = ref([
  { name: "GitHub", url: "#", icon: GithubIcon },
  { name: "Twitter", url: "#", icon: TwitterIcon },
  { name: "LinkedIn", url: "#", icon: LinkedinIcon },
  { name: "Email", url: "#", icon: MailIcon },
]);
</script>

<style scoped>
footer {
  position: relative;
}
</style>
