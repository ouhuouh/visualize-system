<template><div></div></template>
<script>
var axios = require('axios')

export default {
  name: "DataFetch",
  data() {
    return{
      provider_Tzm1: 0,
      provider_To: 0,
      provider_status: '',
      provider_Fxm: 0,
      provider_failure: '',
      controller_Tzco: 0,
      controller_valve: 0,
      controller_Tzcoref: 0,
      controller_status: '',
      exchanger_MPC: 0,
      exchanger_supply: 0,
      exchanger_status: '',
      building_Th: 0,
      building_Tpcob: 0,
      building_Tr: 0,
      building_Fcob: 0,
      building_status: ''
    }
  },
  methods: {
    fetchData() {
      var config = {
          headers: {'Access-Control-Allow-Origin': '*'}
      };
        axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
        axios.get('https://closingtime.szyszki.de/api/details')
          .then((response) => {
              console.log(response)
          })
          .catch((error) => {
              console.log(error)
          })
        axios.get('https://anoldlogcabinforsale.szyszki.de/provider/last/1', config)
        .then((response) => {
          this.provider_Tzm1 = this.returnData(response).incoming_water_temp_Tzm;
          this.provider_To = this.returnData(response).outside_temp_To;
          this.provider_status = this.returnData(response).status;
          this.provider_Fxm = this.returnData(response).warm_water_stream_Fzm;
          this.provider_failure = this.returnData(response).failure
        })
        .catch((error) => {
          console.log(error);
        });
        axios.get('https://anoldlogcabinforsale.szyszki.de/controler/last/1', config)
          .then((response) => {
           this.controller_Tzco = this.returnData(response).incoming_water_temp_Tzco;
           this.controller_valve = this.returnData(response).valve;
           // valve otwiera sie od 0 od 1, podac wartosc liczbowa
           this.controller_Tzcoref = this.returnData(response).set_temp_Tzcoref;
           this.controller_status = this.returnData(response).status;
          })
          .catch((error) => {
            console.log(error);
          });
        axios.get('https://anoldlogcabinforsale.szyszki.de/exchanger/last/1', config)
          .then((response) => {
           this.exchanger_MPC = this.returnData(response).returnMPC_temp;
           this.exchanger_supply = this.returnData(response).supply_temp;
           this.exchanger_status = this.returnData(response).status;
          })
          .catch((error) => {
            console.log(error);
          });

        axios.get('https://anoldlogcabinforsale.szyszki.de/building/taglast/Radek/1', config)
          .then((response) => {
           this.building_Th = this.returnData(response).radiator_temp_Th;
           this.building_Tpcob = this.returnData(response).return_water_temp_Tpcob;
           this.building_Tr = this.returnData(response).room_temp_Tr;
           this.building_Fcob = this.returnData(response).water_intake_Fcob
           this.building_status = this.returnData(response).status;
          })
          .catch((error) => {
            console.log(error);
          });
    },
    updateData(){
        this.$store.commit('updateProvider_Tzm', this.provider_Tzm1);
        this.$store.commit('updateProvider_To', this.provider_To);
        this.$store.commit('updateProvider_status', this.provider_status);
        this.$store.commit('updateProvider_Fxm', this.provider_Fxm);
        this.$store.commit('updateProvider_failure', this.provider_failure);
        this.$store.commit('updateController_Tzco', this.controller_Tzco);
        this.$store.commit('updateController_Tzcoref', this.controller_Tzcoref);
        this.$store.commit('updateController_Valve', this.controller_valve);
        this.$store.commit('updateController_Status', this.controller_status);
        this.$store.commit('updateExchanger_MPC', this.exchanger_MPC);
        this.$store.commit('updateExchanger_Supply', this.exchanger_supply);
        this.$store.commit('updateExchanger_Status', this.exchanger_status);
        this.$store.commit('updateBuilding_Th', this.building_Th);
        this.$store.commit('updateBuilding_Tr', this.building_Tr);
        this.$store.commit('updateBuilding_Fcob', this.building_Fcob);
        this.$store.commit('updateBuilding_Status', this.building_status);
    },
    returnData(res){
      return res.data[0]
    }
  },
  created(){
    this.fetchData();
  },
    mounted() {
      setInterval(() => {
          this.fetchData();
          this.updateData();
      }, 1000)
    }
}
</script>

<style scoped>

</style>
