import { createRouter, createWebHistory } from "vue-router"





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: { name: "dashboard" }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/views/dashboard/Dashboard.vue")
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("@/views/settings/Settings.vue")
    }
  ]
})





export default router