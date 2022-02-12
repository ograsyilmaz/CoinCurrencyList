<template>
  <div class="hello">
    <!-- <p>{{ get_Biance_Colletion_Data }}</p> -->
    <p></p>
    <!-- <b-form-select
      v-model="selected"
      :options="get_Biance_Cerruncy_Sembol_List"
    ></b-form-select>
    {{ selected }} -->
    {{ get_Biance_Colletion_Data }}
    <label for="input-with-list">Input with datalist</label>
    <b-form-input
      class="mt-2"
      v-model="selected"
      list="input-list"
      id="input-with-list"
      @change="hepsiburada"
    ></b-form-input>
    <b-form-datalist
      id="input-list"
      :options="get_Biance_Cerruncy_Sembol_List"
    ></b-form-datalist>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HelloWorld",
  components: {},
  data() {
    return {
      msg: [],
      selected: null,
    };
  },
  computed: {
    ...mapGetters([
      "get_Biance_Cerruncy_Sembol_List",
      "get_Biance_Colletion_Data",
    ]),
  },
  created() {
    this.getBianceCurrencyRateSembol();
  },
  beforeCreate() {},
  watch: {
    // selected(value) {
    //   // localStorage.setItem("CoinCurrency", value);
    //   // this.getfilterBianceCurrenctByRateSembol(value);
    // },
  },

  methods: {
    ...mapActions([
      "getBianceCurrencyRateSembol",
      "getfilterBianceCurrenctByRateSembol",
    ]),
    hepsiburada(x){
      localStorage.setItem("CoinCurrency", x);
      this.getfilterBianceCurrenctByRateSembol(x);
      console.log(x +" test data")
    }
  },
  mounted() {
    if (localStorage.CoinCurrency) {
      this.selected = localStorage.CoinCurrency;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
