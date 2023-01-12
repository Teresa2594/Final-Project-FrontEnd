// install router: npm add vue-router
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import Descubre from "../views/Descubre.vue";
import ComerYBeber from "../views/ComerYBeber.vue";
import Situacion from "../views/Situacion.vue";
import DondeDormir from "../views/DondeDormir.vue";
import Blog from "../views/Blog.vue";
import Users from "../views/users.vue";
import signup from "../views/SignUp.vue";
import login from "../views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/Descubre",
    name: "Descubre",
    component: Descubre,
  },
  {
    path: "/ComerYBeber",
    name: "ComerYBeber",
    component: ComerYBeber,
  },
  {
    path: "/Situacion",
    name: "Situacion",
    component: Situacion,
  },
  {
    path: "/DondeDormir",
    name: "DondeDormir",
    component: DondeDormir,
  },
  {
    path: "/Blog",
    name: "Blog",
    component: Blog,
  },

  {
    path: "/Users",
    name: "Users",
    component: Users,
  },

  {
    path: "/signup",
    name: "signup",
    component: signup,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
