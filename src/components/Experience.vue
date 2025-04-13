<script setup>
const experience = [
  {
    title: "Web Developer",
    company: "Cake",
    date: "2022 - Present",
    description:
      "Be a part of a tight-knit team of designers, product owners & developers, I built MVP things and focus on Digital Bank's roadmap.",
  },
  {
    title: "Frontend Developer",
    company: `Unibiz - (is now "Excel")`,
    date: "2019 - 2020",
    description:
      "Individually worked with agencies, startups to build products and websites.",
  },
  {
    title: "Frontend Developer",
    company: "Innotech",
    date: "2018 - 2019",
    description:
      "Supporting tasks into directly clarify requirements and deal with agencies such as SSI, Maybank, HSC,… to build and maintain their products.",
  },
];
</script>

<template>
  <section class="font-medium">
    <div class="flex flex-col gap-6">
      <h1>Work Experience</h1>
      <div class="flex flex-col justify-between h-full gap-6">
        <div
          v-for="item in experience"
          :key="item.title + item.company"
          class="flex flex-col gap-2"
        >
          <h3 class="font-semibold">{{ item.title }}</h3>
          <p class="text-sm text-gray-500">{{ item.company }}</p>
          <p class="text-sm text-gray-500">{{ item.date }}</p>
          <p class="text-sm">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
