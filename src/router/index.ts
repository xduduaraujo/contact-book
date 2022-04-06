import { createRouter, createWebHistory } from 'vue-router';
import UBHome from '@/components/templates/UBHome.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: UBHome
    }
    // {
    //   path: "/",
    //   name: "emptySchedule",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("@templates/UBEmptySchedule.vue"),
    // },
  ]
});

export default router;
