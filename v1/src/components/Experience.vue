<template>
  <section class="font-medium bg-black text-gray-100">
    <div class="container mx-auto px-4 sm:px-0">
      <h1 class="text-3xl font-bold mb-8 text-gray-100">Work Experience</h1>
      <div class="space-y-16">
        <div class="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-3 sm:gap-6">
          <div class="text-gray-500">2021 - present</div>
          <div class="space-y-2">
            <h3
              class="text-md font-semibold text-gray-100 flex items-center flex-wrap"
            >
              Web Developer<span class="mx-2 text-gray-400">&bull;</span>
              <div class="flex items-center gap-2">
                <a
                  href="https://be.com.vn"
                  target="_blank"
                  class="flex items-center gap-1 text-gray-100 hover:text-yellow-500 transition-colors"
                >
                  <span>Be</span>
                </a>
                <span
                  class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500"
                  >→</span
                >
                <a
                  href="https://cake.vn"
                  target="_blank"
                  class="flex items-center gap-1 text-gray-100 hover:text-pink-500 transition-colors"
                >
                  <span>Cake</span>
                </a>
              </div>
              <span class="mt-1 ml-2 inline-block">
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
            </h3>
            <p class="text-gray-300">
              Working with an awesome team of designers, product folks & devs to
              build features for one of the most Digital Bank in VietNam.
              Helping my web team to build a solid design system and the new
              shape of products, bringing better experience to our users.
            </p>
            <div class="flex flex-wrap gap-2 mt-4">
              <span
                v-for="tech in [
                  'React',
                  'Styled Components',
                  'Tailwind',
                  'Webpack',
                  'Storybook',
                ]"
                :key="tech"
                class="text-gray-400 text-sm"
                >{{ tech }}
                <span class="mx-1 text-gray-600" v-if="tech !== 'Storybook'"
                  >•</span
                ></span
              >
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-3 sm:gap-6">
          <div class="text-gray-500">2021</div>
          <div class="space-y-2">
            <h3
              class="text-md font-semibold flex items-center text-gray-100 flex-wrap"
            >
              Frontend Developer<span class="mx-2 text-gray-400">&bull;</span>
              <a
                href="https://exceltech.vn/"
                target="_blank"
                class="text-gray-100 hover:text-gray-300 transition-colors"
              >
                Unibiz (now "Excel")
              </a>
              <span class="mt-1 ml-2 inline-block">
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
            </h3>
            <p class="text-gray-300">
              Teamed up with various agencies and startups to bring their
              digital dreams to life. Got to wear many hats and dive into a
              bunch of different projects.
            </p>

            <div class="flex flex-wrap gap-2 mt-4">
              <span
                v-for="tech in ['React', 'Redux', 'CSSModules']"
                :key="tech"
                class="text-gray-400 text-sm"
                >{{ tech }}
                <span class="mx-1 text-gray-600" v-if="tech !== 'SCSS'"
                  >•</span
                ></span
              >
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-3 sm:gap-6">
          <div class="text-gray-500">2020 - 2021</div>
          <div class="space-y-2">
            <h3
              class="text-md font-semibold text-gray-100 flex items-center flex-wrap"
            >
              Frontend Developer<span class="mx-2 text-gray-400">&bull;</span>
              <a
                href="https://innotech.vn"
                target="_blank"
                class="text-gray-100 hover:text-gray-300 transition-colors"
              >
                Innotech
              </a>
              <span class="mt-1 ml-2 inline-block">
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
            </h3>
            <p class="text-gray-300">
              Jumped in as an intern, to help big financial players like SSI,
              Maybank, HSC and more build and maintain their digital presence.
              Translated complex requirements into user-friendly interfaces.
            </p>

            <div class="flex flex-wrap gap-2 mt-4">
              <span
                v-for="tech in ['React', 'C#', 'SCSS', 'jQuery']"
                :key="tech"
                class="text-gray-400 text-sm"
                >{{ tech }}
                <span class="mx-1 text-gray-600" v-if="tech !== 'jQuery'"
                  >&bull;</span
                ></span
              >
            </div>
          </div>
        </div>

        <!-- Resume View Button -->
        <div class="pt-4">
          <a
            :href="resumePdf"
            target="_blank"
            class="text-white hover:text-gray-300 transition-colors flex items-center"
          >
            View Full Resume
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
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import resumePdf from "../assets/HoangThaiHo_FrontEndDeveloper_Resume.pdf";
// You can use your experience array data here
// const experience = [...];
</script>

<style scoped>
@media (max-width: 512px) {
  h3 {
    font-size: 0.95rem;
  }

  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
