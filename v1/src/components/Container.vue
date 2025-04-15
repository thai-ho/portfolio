<template>
  <div class="flex flex-col">
    <h2 class="text-2xl font-semibold">{{ heading }}</h2>
    <div class="flex flex-col gap-6">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  heading: string;
}

const { heading } = defineProps<Props>();
</script>
