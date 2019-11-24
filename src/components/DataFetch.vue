<template><div></div></template>
<script>
var axios = require('axios')

export default {
  name: "DataFetch",
  methods: {
    fetchData() {
      var config = {
          headers: {'Access-Control-Allow-Origin': '*'}
      };
      axios.get('https://anoldlogcabinforsale.szyszki.de/building/tag/Radek', config)
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
    }
  },
  created(){
    this.fetchData()
  }
}
</script>

<style scoped>

</style>
<!--CONTROLER-->
<!--[-->
<!--{-->
<!--"incoming_water_temp_Tzco": "15.121125088383508",-->
<!--"set_temp_Tzcoref": "52.6375",-->
<!--"status": "running",-->
<!--"timestamp": "2009-12-12+00:44:45",-->
<!--"valve": "1"-->
<!--}-->
<!--]-->
<!--PROVIDER-->
<!--[-->
<!--{-->
<!--"failure": "False",-->
<!--"incoming_water_temp_Tzm": "77.5",-->
<!--"outside_temp_To": "3.2",-->
<!--"status": "Run",-->
<!--"timestamp": "2009-12-11+00:00:00",-->
<!--"warm_water_stream_Fzm": "1.0"-->
<!--}-->
<!--]-->
<!--EXCHANGER-->
<!--[-->
<!--{-->
<!--"returnMPC_temp": "99.77302686139798",-->
<!--"status": "Unknow",-->
<!--"supply_temp": "15.121125088388581",-->
<!--"timestamp": "0"-->
<!--}-->
<!--]-->

<!--BUILDING-->
<!--{-->
<!--"radiator_temp_Th": "15",-->
<!--"return_water_temp_Tpcob": "30",-->
<!--"room_temp_Tr": "20",-->
<!--"status": "running",-->
<!--"tag_name": "Radek",-->
<!--"timestamp": "00:01:53",-->
<!--"water_intake_Fcob": "500"-->
<!--},-->
<!--{-->
<!--"radiator_temp_Th": "15",-->
<!--"return_water_temp_Tpcob": "30",-->
<!--"room_temp_Tr": "20",-->
<!--"status": "running",-->
<!--"tag_name": "Radek",-->
<!--"timestamp": "00:01:53",-->
<!--"water_intake_Fcob": "500"-->
<!--},-->
<!--{-->
<!--"radiator_temp_Th": "15",-->
<!--"return_water_temp_Tpcob": "30",-->
<!--"room_temp_Tr": "20",-->
<!--"status": "running",-->
<!--"tag_name": "Radek",-->
<!--"timestamp": "00:01:53",-->
<!--"water_intake_Fcob": "500"-->
<!--}-->
<!--]-->
