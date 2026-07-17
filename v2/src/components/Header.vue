<template>
  <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-aurora-border bg-aurora-deep/80">
    <div class="v2-container flex items-center justify-between h-14">
      <router-link to="/v2" class="text-sm font-semibold text-aurora-text hover:text-white transition-colors no-underline">
        thai.ho
      </router-link>

      <div class="relative" ref="dropdownRef">
        <button
          @click="isOpen = !isOpen"
          class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm
                 bg-aurora-surface border border-aurora-border
                 hover:border-aurora-violet/30 transition-all cursor-pointer"
        >
          <span class="w-2 h-2 rounded-full" :class="currentVersion === 'v2' ? 'bg-aurora-violet' : 'bg-gray-500'" />
          <span class="text-aurora-text">{{ currentVersion === 'v2' ? '2026 • Aurora' : '2025 • Retro' }}</span>
          <svg
            class="w-3 h-3 text-aurora-muted transition-transform"
            :class="{ 'rotate-180': isOpen }"
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <Transition name="dropdown">
          <div
            v-if="isOpen"
            class="absolute right-0 mt-2 w-48 rounded-lg overflow-hidden
                   bg-aurora-surface border border-aurora-border shadow-xl shadow-black/40"
          >
            <button
              @click="switchVersion('v2')"
              class="w-full flex items-center gap-3 px-4 py-3 text-sm text-left
                     hover:bg-aurora-violet/10 transition-colors cursor-pointer"
              :class="currentVersion === 'v2' ? 'text-aurora-violet' : 'text-aurora-text'"
            >
              <span class="w-2 h-2 rounded-full bg-aurora-violet" />
              2026 • Aurora
            </button>
            <button
              @click="switchVersion('v1')"
              class="w-full flex items-center gap-3 px-4 py-3 text-sm text-left
                     hover:bg-gray-500/10 transition-colors cursor-pointer border-t border-aurora-border"
              :class="currentVersion === 'v1' ? 'text-white' : 'text-aurora-text'"
            >
              <span class="w-2 h-2 rounded-full bg-gray-500" />
              2025 • Retro
            </button>
          </div>
        </Transition>
      </div>
    </div>
  </header>
  <!-- Spacer for fixed header -->
  <div class="h-14" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const currentVersion = computed(() => {
  const path = route.path;
  if (path.startsWith("/v1")) return "v1";
  return "v2";
});

function switchVersion(version: string) {
  isOpen.value = false;
  router.push(`/${version}`);
}

function handleClickOutside(e: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
    isOpen.value = false;
  }
}

onMounted(() => document.addEventListener("click", handleClickOutside));
onUnmounted(() => document.removeEventListener("click", handleClickOutside));
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
