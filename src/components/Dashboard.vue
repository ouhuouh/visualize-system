<template>
  <div class="container">
    <Header class="header"></Header>
    <MeasuringDashboard class="measure_dash"></MeasuringDashboard>
    <BuildingDashboard class="build_dash"></BuildingDashboard>
    <DataFetch style="display:none"></DataFetch>
  </div>
</template>

<script>
import Header from "./Header";
import BuildingDashboard from "./BuildingDashboard";
import MeasuringDashboard from "./MeasuringDashboard";
import DataFetch from "./DataFetch";
export default {
  name: 'HelloWorld',
  components: {DataFetch, MeasuringDashboard, BuildingDashboard, Header}
}
</script>

<style scoped>
@media(max-width: 1200px){
  .container {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    overflow: scroll;
    align-content: flex-start;

  }
  .measure_dash, .build_dash {
    width: 100%;
    height: auto;
  }
}

@media(min-width: 1200px){
  .container {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    overflow: hidden;
  }
  .measure_dash, .build_dash {
    width: 90%;
    height: 40%
  }
}
.container{
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 100%;
  overflow: hidden;
  justify-content: space-around;
  background: #242322;
  color: azure;
}

.header{
  width: 100%;
  height: auto;
}

</style>
