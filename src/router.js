import Vue from "vue";
import Router from "vue-router";
import Signup from "./views/Signup";
import Login from "./views/Login";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/login",
      component: Login
    },
    {
      path: "/signup",
      component: Signup
    }
  ]
});

export default router;