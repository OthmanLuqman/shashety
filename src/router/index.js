import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Search from "@/views/Search.vue";
import Catagories from "@/views/catagories.vue";
import liveTv from "@/views/live-tv";
import Single from "@/views/Single";
import Login from "@/views/LoginPage";
import users from "@/views/user";
import PageNotFound from "@/views/PageNotFound";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/:lang",
  //   component: {
  //     render: (h) => h("router-view"),
  //   },
  //   children: [
  //     {
  //       path: "",
  //       name: "Home",
  //       component: Home,
  //     },
  //     {
  //       path: "Search",
  //       name: "Search",
  //       component: Search,
  //     },
  //     {
  //       path: "catagories",
  //       name: "Catagories",
  //       component: Catagories,
  //     },
  //     {
  //       path: "live-tv",
  //       name: "liveTv",
  //       component: liveTv,
  //     },
  //     {
  //       path: "Single/:id",
  //       name: "Single-page",
  //       component: Single,
  //       props: true,
  //     },
  //     {
  //       path: "Login",
  //       name: "Login-page",
  //       component: Login,
  //       //props: true,
  //     },
  //     {
  //       path: "users",
  //       name: "User-page",
  //       component: users,
  //       //props: true,
  //     },
  //     {
  //       path: "*",
  //       component: PageNotFound,
  //     },
  //   ],
  // },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/catagories",
    name: "Catagories",
    component: Catagories,
  },
  {
    path: "/live-tv",
    name: "liveTv",
    component: liveTv,
  },
  {
    path: "/single/:id",
    name: "Single-page",
    component: Single,
    props: true,
  },
  {
    path: "/login",
    name: "Login-page",
    component: Login,
    //props: true,
  },
  {
    path: "/users",
    name: "User-page",
    component: users,
    //props: true,
  },
  {
    path: "*",
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
