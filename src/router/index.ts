import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/v2",
    },
    // V2 routes (2026 — Aurora theme)
    {
        path: "/v2",
        component: () => import("@v2/App.vue"),
        children: [
            {
                path: "",
                name: "V2Home",
                component: () => import("@v2/components/Home.vue"),
            },
            {
                path: "all-projects",
                name: "V2AllProjects",
                component: () => import("@v2/components/AllProjects.vue"),
            },
        ],
    },
    // V1 routes (2025 — Retro)
    {
        path: "/v1",
        component: () => import("@v1/App.vue"),
        children: [
            {
                path: "",
                name: "V1Home",
                component: () => import("@v1/components/Home.vue"),
            },
            {
                path: "all-projects",
                name: "V1AllProjects",
                component: () => import("@v1/components/AllProjects.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) return savedPosition;
        return { top: 0 };
    },
});

export default router;
