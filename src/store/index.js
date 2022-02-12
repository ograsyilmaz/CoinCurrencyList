import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  bianceData: [],
  bianceCerruncyList: [],
  selectCurruncySymbol: "",
};
const mutations = {
  set_Biance_Collection_Data(state, paylod) {
    state.bianceData.push(paylod);
  },
  set_BianceCerruncyList(state, paylod) {
    state.bianceCerruncyList = paylod;
  },
};
const getters = {
  get_Biance_Colletion_Data(state) {
    return state.bianceData;
  },
  get_Biance_Cerruncy_Sembol_List(state) {
    return state.bianceCerruncyList;
  },
};
const actions = {
  async getBianceCurrencyRateSembol({ commit }) {
    const dataList = [];
    await this._vm.$http.get("/ticker/24hr").then((response) => {
      response.data.map((data) => {
        const value = {
          text: data.symbol,
          value: data.symbol,
        };
        dataList.push(value);
      });
    });
    commit("set_BianceCerruncyList", dataList);
  },

  async getfilterBianceCurrenctByRateSembol({ commit }, value) {
    let filterData = "";
    await this._vm.$http.get("/ticker/24hr").then((response) => {
      filterData = response.data.filter((x) => {
        return x.symbol == value;
      });
    });

    const replaceData = {
      Sembol: filterData[0].symbol,
      HighPrice: filterData[0].highPrice,
      LowPrice: filterData[0].lowPrice,
    };
    commit("set_Biance_Collection_Data", replaceData);
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
