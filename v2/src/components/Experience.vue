<template>
  <section class="v2-container py-12 fade-in fade-in-delay-3">
    <h2 class="text-2xl font-bold mb-10 text-white">Work Experience</h2>

    <div class="space-y-8">
      <div
        v-for="exp in experiences"
        :key="exp.company"
        class="glass-card p-6 aurora-glow"
      >
        <div class="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 mb-3">
          <span class="text-aurora-muted text-sm shrink-0 sm:w-[110px] sm:pt-0.5">
            {{ exp.period }}
          </span>
          <div class="flex-1">
            <h3 class="text-base font-semibold text-white flex items-center flex-wrap gap-1">
              {{ exp.role }}
              <span class="text-aurora-muted">•</span>
              <a
                :href="exp.companyUrl"
                target="_blank"
                class="text-white hover:text-aurora-violet transition-colors no-underline"
              >
                {{ exp.company }}
              </a>
              <template v-if="exp.transitionTo">
                <span class="gradient-text">→</span>
                <a
                  :href="exp.transitionTo.companyUrl"
                  target="_blank"
                  class="text-white hover:text-aurora-pink transition-colors no-underline"
                >
                  {{ exp.transitionTo.company }}
                </a>
              </template>
              <ExternalLinkIcon />
            </h3>
            <p class="text-aurora-text/80 mt-2 text-sm leading-relaxed">
              {{ exp.description }}
            </p>
            <div class="flex flex-wrap gap-2 mt-4">
              <span
                v-for="tech in exp.technologies"
                :key="tech"
                class="px-2.5 py-1 text-xs rounded-full
                       bg-aurora-violet/10 text-aurora-violet border border-aurora-violet/20"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Resume link -->
    <div class="mt-8">
      <a
        :href="resumeUrl"
        target="_blank"
        class="inline-flex items-center gap-2 text-white hover:text-aurora-violet transition-colors no-underline text-sm"
      >
        View Full Resume
        <ExternalLinkIcon />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experiences } from "@v2/data";
import ExternalLinkIcon from "@v2/components/ExternalLinkIcon.vue";
import resumeUrl from "@v1/assets/HoangThaiHo_FrontEndDeveloper_Resume.pdf";
</script>
