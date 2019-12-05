<template>
  <div class="build_dash">
    <Building class="buildA" name="Building A" :status="this.statusA" :room_temp="this.room_tempA" :rad_temp="this.rad_tempA" :water_intake="this.water_intakeA"></Building>
    <Building class="buildB" name="Building B" :status="this.statusB" :room_temp="this.room_tempB" :rad_temp="this.rad_tempB" :water_intake="this.water_intakeB"></Building>
  </div>
</template>

<script>
import Building from "./Building";
export default {
    name: "BuildingDashboard",
    components: {Building},
    data() {
        return {
            statusA: '',
            statusB: '',
            room_tempA: 0,
            room_tempB: 0,
            rad_tempA: 0,
            rad_tempB: 0,
            water_intakeA: 0,
            water_intakeB: 0
        }
    },
    mounted() {
        setInterval(() => {
            this.statusA = this.$store.getters.getBuilding_Status;
            this.room_tempA = Number(Number(this.$store.getters.getBuilding_Tr).toFixed(2));
            this.rad_tempA = Number(Number(this.$store.getters.getBuilding_Th).toFixed(2));
            this.water_intakeA = Number(Number(this.$store.getters.getBuilding_Fcob).toFixed(2));
        }, 1000);
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
    height: fit-content;
  }
  .build_dash > * {
    width: 32%;
    align-self: center;
    height: fit-content;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
}
.buildA {
  background: rgba(29, 102, 247, 0.6)
}

.buildB{
  background: rgba(247, 84, 0, 0.6)
}
</style>
