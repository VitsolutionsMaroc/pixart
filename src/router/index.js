import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/properties",
    name: "properties",
    component: () => import("../views/Properties.vue"),
  },
  {
    path: "/properties/:estateId/details",
    name: "properties.details",
    component: () => import("../views/Details.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

export default router;
