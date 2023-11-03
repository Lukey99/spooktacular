import { createRouter, createWebHistory } from 'vue-router'
import Login from "../views/Login.vue";
import Menu from "../views/Menu.vue";
import Folder from "../views/Folder.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/folder',
      name: 'Folder',
      component: Folder
    },
  ]
})

export default router
