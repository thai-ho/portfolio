<template>
  <section class="v2-container py-12 fade-in fade-in-delay-5">
    <h2 class="text-2xl font-bold mb-8 text-white">Links</h2>

    <div class="space-y-4">
      <div
        v-for="link in socialLinks"
        :key="link.label"
        class="grid grid-cols-[100px_1fr] items-center"
      >
        <span class="text-aurora-muted text-sm">{{ link.label }}</span>
        <a
          :href="link.url"
          target="_blank"
          class="flex items-center text-white hover:text-aurora-violet transition-colors no-underline text-sm"
        >
          {{ link.handle }}
          <ExternalLinkIcon />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { socialLinks } from "@v2/data";
import ExternalLinkIcon from "@v2/components/ExternalLinkIcon.vue";
</script>
