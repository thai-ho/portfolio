<script setup lang="ts">
const projects = [
  {
    title: "Portfolio v1",
    technologies: ["Vue.js", "Tailwind CSS", "Vite"],
    sourceLink: "https://github.com/thai-ho/portfolio",
    year: "2025",
  },
  {
    title: "CTicket",
    technologies: [
      "Next.js",
      "Typescript",
      "Daisy UI",
      "Tailwind CSS",
      "Tooljet",
      "Casdoor",
    ],
    sourceLink: "https://cticket.vn/",
    year: "2025",
  },
  {
    title: "Cake",
    technologies: ["Next.js", "Typescript", "Tailwind CSS", "Strapi"],
    sourceLink: "https://cake.vn/",
    year: "2025",
  },
  {
    title: "Cake Onboarding Platform",
    technologies: [
      "Next.js",
      "Typescript",
      "CSS-in-JS",
      "RHF",
      "React Query",
      "BFF",
    ],
    sourceLink: "https://dop.cake.vn/affiliate",
    year: "2023",
    description:
      "There are many links (a.k.a. vendors) for this platform, but I chose this one just to showcase the BFF concept :D",
  },
  {
    title: "Cake Internal Portal",
    technologies: [
      "React",
      "Typescript",
      "RHF",
      "React Query",
      "Micro services",
      "Monorepo",
    ],
    sourceLink: "private",
    year: "2024",
  },
  {
    title: "Banhmi UI Library",
    technologies: ["React", "Typescript", "Storybook"],
    sourceLink: "https://github.com/beVietnam/banhmi",
    year: "2021",
  },
  {
    title: "Eoty Dashboards",
    technologies: ["React", "Node.js", "CSSModules"],
    sourceLink: "private",
    year: "2021",
  },
  {
    title: "VICO Hong Kong Landing Page",
    technologies: ["React", "Node.js", "Next.js", "CSSModules"],
    sourceLink: "https://www.vico.com.hk/",
    year: "2021",
  },
  {
    title: "WisereOS",
    technologies: ["React", "Next.js", "CSSModules"],
    sourceLink: "https://wisere.com/",
    year: "2021",
  },
  {
    title: "WineMart",
    technologies: ["React", "Next.js", "CSSModules"],
    sourceLink: "https://winemart.vn/",
    year: "2021",
  },
  {
    title: "Derivative SSI Board",
    technologies: ["JS", "SASS/SCSS", "jQuery"],
    sourceLink: "",
    year: "2020",
  },
  {
    title: "HSC, TVSI, Maybank,... Trading Platform",
    technologies: ["React", "SASS/SCSS", "C#", "jQuery"],
    sourceLink: "",
    year: "2020",
  },
];
</script>

<template>
  <section class="bg-black text-white py-8 px-4 sm:px-0">
    <div class="container mx-auto">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold">Project Archives</h1>
        <a
          href="/"
          class="text-white hover:text-gray-300 transition-colors flex items-center gap-2"
        >
          <span>←</span> Back to home
        </a>
      </div>

      <div class="border-t border-gray-800 mb-4"></div>

      <div class="space-y-8">
        <div v-for="project in projects" :key="project.title">
          <div class="grid grid-cols-[auto_1fr] border-b border-gray-800 pb-8">
            <div class="text-gray-500 pt-0.5">
              {{ project.year }}<span class="mx-2 text-gray-400">&bull;</span>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-white flex items-center">
                <a
                  v-if="
                    project.sourceLink &&
                    !['private'].includes(project.sourceLink)
                  "
                  :href="project.sourceLink"
                  target="_blank"
                  class="text-white hover:text-gray-300 transition-colors flex items-center"
                >
                  {{ project.title }}
                  <span class="ml-2 inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M10.9639 8.92676L10.957 3.59473C10.957 3.42155 10.9023 3.28027 10.793 3.1709C10.6882 3.05697 10.5446 3 10.3623 3H5.03027C4.8571 3 4.7181 3.05697 4.61328 3.1709C4.50846 3.28027 4.45605 3.41016 4.45605 3.56055C4.45605 3.70638 4.51074 3.83398 4.62012 3.94336C4.73405 4.05273 4.86393 4.10742 5.00977 4.10742H6.58887L9.2959 4.01172L8.26367 4.89355L3.1709 10C3.05697 10.1094 3 10.237 3 10.3828C3 10.5332 3.05697 10.6676 3.1709 10.7861C3.28939 10.9046 3.42383 10.9639 3.57422 10.9639C3.72461 10.9639 3.85449 10.9092 3.96387 10.7998L9.06348 5.69336L9.95898 4.66113L9.84277 7.34766V8.9541C9.84277 9.09994 9.89746 9.22982 10.0068 9.34375C10.1208 9.45768 10.2529 9.51465 10.4033 9.51465C10.5492 9.51465 10.679 9.45996 10.793 9.35059C10.9069 9.23665 10.9639 9.09538 10.9639 8.92676Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </a>
                <span v-else class="w-full flex items-center justify-between">
                  <span>{{ project.title }}</span>
                  <span
                    class="ml-2 px-2 py-0.5 text-xs bg-gray-800 text-gray-400 rounded"
                  >
                    Private</span
                  >
                </span>
              </h3>

              <p v-if="project.description" class="text-gray-300 text-sm mt-2">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-1 mt-2">
                <span
                  v-for="(tech, index) in project.technologies"
                  :key="tech"
                  class="text-gray-400 text-sm"
                >
                  {{ tech
                  }}<span
                    v-if="index !== project.technologies.length - 1"
                    class="text-gray-600 mx-1"
                    >•</span
                  >
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
</style>
