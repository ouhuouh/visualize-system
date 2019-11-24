<template>
  <div class="build_dash">
    <Building name="Building A" :temp="this.tempA"></Building>
    <Building name="Building B" :temp="this.tempB"></Building>
  </div>
</template>

<script>
import Building from "./Building";
export default {
  name: "BuildingDashboard",
  components: {Building},
  data(){
    return {
      tempA: 5,
      tempB: 2
    }
  }
}
</script>

<style scoped>
.build_dash {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
.build_dash > * {
  width: 47%;
  align-self: center;
  padding: 50px 0px;
}

</style>
