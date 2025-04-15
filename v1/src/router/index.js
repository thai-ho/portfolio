// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import AllProjects from "../components/AllProjects.vue";
import Home from "../components/Home.vue"; // Assuming you have a Home component

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/all-projects", // Match the path used in RouterLink
    name: "AllProjects",
    component: AllProjects,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
