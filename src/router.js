import Vue from "vue";
import Router from "vue-router";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Home from "./views/Home";
import Article from "./views/Article";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/login",
      component: Login
    },
    {
      path: "/signup",
      component: Signup
    },
    {
      path: "/",
      component: Home
    },
    {
      path: "/article/:id",
      component: Article
    }
  ]
});

export default router;
