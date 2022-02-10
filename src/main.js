import Vue from "vue";
import App from "./App.vue";
import axiosIns from "./lib/axios";

Vue.config.productionTip = false;

Vue.use(axiosIns);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
