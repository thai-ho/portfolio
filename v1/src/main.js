// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Make sure this path is correct
import "./assets/main.css"; // If you're using Tailwind

const app = createApp(App);

// Use the router
app.use(router);

app.mount("#app");
