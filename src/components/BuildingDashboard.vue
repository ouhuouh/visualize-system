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
@media(max-width: 1200px){
  .build_dash {
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
  }
  .build_dash > * {
    width: 80%;
    align-self: center;
    padding: 50px 0px;
    height: 20%;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
  }
}

@media(min-width: 1200px){
  .build_dash {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
  .build_dash > * {
    width: 32%;
    align-self: center;
    padding: 50px 0px;
    height: 30%;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
  }
}
.build_dash > * {
  background: rgba(142, 142, 142, 0.77)
}
</style>
