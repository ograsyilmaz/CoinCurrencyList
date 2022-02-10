import Vue from "vue";

import axios from "axios";

const axiosIns = axios.create({ baseURL: "https://api2.binance.com/api/v3" });

export default {
  install() {
    Vue.prototype.$http = axiosIns;
  },
};
