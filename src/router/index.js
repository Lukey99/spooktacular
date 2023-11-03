import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Menu from "../views/Menu.vue";
import Folder from "../views/Folder.vue";
import Clues from "../views/Clues.vue";
import CluesDetails from "../views/CluesDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/menu",
      name: "Menu",
      component: Menu,
    },
    {
      path: "/folder",
      name: "Folder",
      component: Folder,
    },
    {
      path: "/clues",
      name: "Clues",
      component: Clues,
    },
    {
      path: "/cluesDetails/:clue",
      name: "CluesDetails",
      component: CluesDetails,
    },
  ],
});

export default router;
