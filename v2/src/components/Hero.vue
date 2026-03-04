<template>
  <section class="v2-container pt-20 pb-16 fade-in">
    <div class="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start mb-8">
      <div class="shrink-0 w-[96px] h-[96px] rounded-full overflow-hidden aurora-glow">
        <img
          :src="avatarUrl"
          :alt="bio.name"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="text-center sm:text-left">
        <h1 class="text-4xl sm:text-5xl font-bold mb-2 gradient-text leading-tight">
          {{ bio.name }}
        </h1>
        <p class="text-aurora-muted text-lg">{{ bio.title }}</p>
      </div>
    </div>

    <div class="space-y-3 text-aurora-text/90 leading-relaxed fade-in fade-in-delay-2">
      <p>{{ bio.greeting }}</p>
      <p v-for="(paragraph, i) in bio.intro" :key="i">{{ paragraph }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { bio } from "@v2/data";
import avatarUrl from "@v1/assets/ava.jpeg";
</script>
