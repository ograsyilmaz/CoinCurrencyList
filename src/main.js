import Vue from "vue";
import App from "./App.vue";
import axiosIns from "./lib/axios";
 import store from "./store/index";
 import {BootstrapVue,IconsPlugin} from 'bootstrap-vue';

Vue.config.productionTip = false;

Vue.$http = Vue.prototype.$http = axiosIns
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


new Vue({
   store,
  render: (h) => h(App),

}).$mount("#app");
