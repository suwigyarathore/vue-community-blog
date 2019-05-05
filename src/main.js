import Vue from "vue";
import VueNoty from "vuejs-noty";
import App from "./App.vue";
import router from "./router";

import "vuejs-noty/dist/vuejs-noty.css";

Vue.use(VueNoty);
Vue.config.productionTip = false;

const authData = localStorage.getItem("auth");

new Vue({
  router,
  data: {
    auth: authData ? JSON.parse(authData) : {}
  },
  render: h => h(App)
}).$mount("#app");
