<template>
  <section class="v2-container py-12 fade-in fade-in-delay-4">
    <h2 class="text-2xl font-bold mb-10 text-white">Projects</h2>

    <!-- Bento grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div
        v-for="project in featuredProjects"
        :key="project.title"
        class="glass-card p-6 aurora-glow group"
      >
        <h3 class="text-lg font-semibold text-white flex items-center mb-3">
          <a
            :href="project.sourceLink"
            target="_blank"
            class="text-white hover:text-aurora-violet transition-colors no-underline flex items-center"
          >
            {{ project.title }}
            <ExternalLinkIcon />
          </a>
        </h3>
        <p v-if="project.description" class="text-aurora-text/80 text-sm mb-4 leading-relaxed">
          {{ project.description }}
        </p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="px-2.5 py-1 text-xs rounded-full
                   bg-aurora-cyan/10 text-aurora-cyan border border-aurora-cyan/20"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>

    <!-- View all projects -->
    <div class="mt-8">
      <router-link
        to="/v2/all-projects"
        class="inline-flex items-center gap-2 text-white hover:text-aurora-violet transition-colors no-underline text-sm"
      >
        View Full Project Archive
        <ExternalLinkIcon />
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import { featuredProjects } from "@v2/data";
import ExternalLinkIcon from "@v2/components/ExternalLinkIcon.vue";
</script>
