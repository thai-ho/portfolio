<script setup>
const projects = [
  {
    title: "Portfolio v1",
    description:
      "The site you're looking at right now! Built with Vue and Tailwind.",
    technologies: ["Vue.js", "Tailwind CSS", "Vite"],
    liveLink: "https://your-portfolio-url.com",
    sourceLink: "https://github.com/thai-ho/portfolio",
    image: "/path-to-image.jpg", // Optional
  },
];
</script>

<template>
  <section class="font-medium bg-black text-gray-100 py-8">
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold mb-10 text-gray-100">Projects</h1>

      <div class="space-y-16">
        <div class="grid grid-cols-1 gap-8">
          <div
            v-for="project in projects"
            :key="project.title"
            class="border-t border-gray-800 pt-8"
          >
            <h3 class="text-xl font-semibold text-gray-100 flex items-center mb-4">
              <a
                :href="project.sourceLink"
                target="_blank"
                class="text-gray-100 hover:text-gray-300 transition-colors"
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
            </h3>

            <p class="text-gray-300 mb-6">{{ project.description }}</p>

            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="text-gray-400 text-sm"
                >{{ tech }}
                <span
                  class="mx-1 text-gray-600"
                  v-if="
                    tech !==
                    project.technologies[project.technologies.length - 1]
                  "
                  >•</span
                ></span
              >
            </div>
          </div>
        </div>

        <!-- Link to all projects -->
        <div class="pt-4 border-t border-gray-800">
          <RouterLink
            to="/all-projects"
            class="inline-flex items-center gap-2 py-2 text-gray-100 hover:text-gray-300 transition-colors no-underline"
          >
            <span>View Full Project Archive</span>
            <span class="inline-block">
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
          </RouterLink>
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
