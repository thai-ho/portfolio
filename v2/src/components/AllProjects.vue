<template>
  <section class="v2-container py-20 fade-in">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
      <h1 class="text-3xl font-bold text-white">Project Archives</h1>
      <router-link
        to="/v2"
        class="flex items-center gap-2 text-aurora-muted hover:text-white transition-colors no-underline text-sm"
      >
        <span>←</span> Back to home
      </router-link>
    </div>

    <div class="border-t border-aurora-border mb-6" />

    <div class="space-y-0">
      <div
        v-for="(project, index) in allProjects"
        :key="project.title"
        class="grid grid-cols-[auto_1fr] py-6"
        :class="{ 'border-b border-aurora-border': index !== allProjects.length - 1 }"
      >
        <div class="text-aurora-muted text-sm pt-0.5 pr-2">
          {{ project.year }}<span class="mx-2 text-aurora-border">•</span>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-white flex items-center flex-wrap">
            <a
              v-if="project.sourceLink && !['private', ''].includes(project.sourceLink)"
              :href="project.sourceLink"
              target="_blank"
              class="text-white hover:text-aurora-violet transition-colors no-underline flex items-center"
            >
              {{ project.title }}
              <ExternalLinkIcon />
            </a>
            <span v-else class="flex items-center justify-between w-full">
              <span>{{ project.title }}</span>
              <span
                v-if="project.sourceLink === 'private'"
                class="ml-2 px-2 py-0.5 text-xs bg-aurora-surface text-aurora-muted rounded border border-aurora-border"
              >
                Private
              </span>
            </span>
          </h3>

          <p v-if="project.description" class="text-aurora-text/70 text-sm mt-2">
            {{ project.description }}
          </p>

          <div class="flex flex-wrap gap-1.5 mt-3">
            <span
              v-for="(tech, i) in project.technologies"
              :key="tech"
              class="text-aurora-muted text-xs"
            >
              {{ tech }}<span v-if="i !== project.technologies.length - 1" class="text-aurora-border ml-1.5">•</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { allProjects } from "@v2/data";
import ExternalLinkIcon from "@v2/components/ExternalLinkIcon.vue";
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
