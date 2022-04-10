import { createRouter, createWebHistory } from 'vue-router';
import UBHome from '@templates/UBHome.vue';
import UBContacts from '@templates/UBContacts.vue';
import { Rotas } from '@/enums/Rotas';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Rotas.UBHome,
      name: 'UBHome',
      component: UBHome
    },
    {
      path: Rotas.UBContacts,
      name: 'UBContacts',
      component: UBContacts
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
