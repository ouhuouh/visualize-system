<template>
  <div class="container">
    <Header style="width:100%; height: 10%"></Header>
    <MeasuringDashboard class="measure_dash"></MeasuringDashboard>
    <BuildingDashboard class="build_dash"></BuildingDashboard>
  </div>
</template>

<script>
import Header from "./Header";
import BuildingDashboard from "./BuildingDashboard";
import MeasuringDashboard from "./MeasuringDashboard";
export default {
  name: 'HelloWorld',
  components: {MeasuringDashboard, BuildingDashboard, Header}
}
</script>

<style scoped>
.container{
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.first-row {
  width: 31%;
  height: 40%
}

.measure_dash, .build_dash {
  width: 100%;
  height: 40%
}
</style>
