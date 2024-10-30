import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LayoutApp from "@/layouts/layout-app.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      components: LayoutApp,
      children: [
        {
          path: "/",
          name: "homeView",
          component: HomeView,
        },
      ],
    },
  ],
});

export default router;
