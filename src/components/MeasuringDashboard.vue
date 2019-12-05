<template >
    <div class="measure_dash">
        <MeasuringElement :name="this.items[0].name" :status="this.items[0].status" :attr1="this.items[0].attr1" :attr2="this.items[0].attr2"></MeasuringElement>
        <MeasuringElement :name="this.items[1].name" :status="this.items[1].status" :attr1="this.items[1].attr1" :attr2="this.items[1].attr2" :attr3="this.items[1].attr3"></MeasuringElement>
        <MeasuringElement :name="this.items[2].name" :status="this.items[2].status" :attr1="this.items[2].attr1" :attr2="this.items[2].attr2"></MeasuringElement>
    </div>
</template>

<script>
import MeasuringElement from "./MeasuringElement";
import {mapGetters} from "vuex";
export default {
  name: "MeasuringDashboard",
  components: {MeasuringElement},
  data() {
    return {
        items: [
            {name: "Provider", status: 'unknown', attr1: 0, attr2: 0},
            {name: "Controller", status: 'unknown', attr1: 0, attr2: 0, attr3: 0},
            {name: "Heat Exchanger", status: 'unknown', attr1: 0, attr2: 0}
        ]
    }
  },
    computed: mapGetters['getProvider_Tzm'],
    watch: {
        getProvider_Tzm: function() {
            console.log("watch dziala")
        }
    },
    mounted() {
        setInterval(() => {
            this.items[0].status = this.$store.getters.getProvider_status;
            this.items[0].attr1 = Number(Number(this.$store.getters.getProvider_Tzm).toFixed(2));
            this.items[0].attr2 = Number(Number(this.$store.getters.getProvider_To).toFixed(2));
            this.items[1].status = this.$store.getters.getController_Status;
            this.items[1].attr1 = Number(Number(this.$store.getters.getController_Valve));
            this.items[1].attr2 = Number(Number(this.$store.getters.getController_Tzco).toFixed(2));
            this.items[1].attr3 = Number(Number(this.$store.getters.getController_Tzcoref).toFixed(2));
            this.items[2].status = this.$store.getters.getExchanger_Status;
            this.items[2].attr1 = Number(Number(this.$store.getters.getExchanger_Supply).toFixed(2));
            this.items[2].attr2 = Number(Number(this.$store.getters.getExchanger_MPC).toFixed(2));
        }, 1000);
  }
}
</script>

<style scoped>
@media(max-width: 1200px){
    .measure_dash {
        display: flex;
        flex-flow: column;
        justify-content: space-evenly;
    }
    .measure_dash > * {
        width: 80%;
        align-self: center;
        padding: 50px 0px;
        height: 40%;
        display: flex;
        flex-flow: column;
        justify-content: flex-end;
        margin-top: 15px;
    }
}

@media(min-width: 1200px){
    .measure_dash {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
    }
    .measure_dash > * {
        width: 32%;
        align-self: center;
        padding: 10px 0px;
        height: fit-content;
        display: flex;
        flex-flow: column;
        justify-content: flex-end;
    }
}

.measure_dash > * {
    background: rgba(42, 46, 46, 0.93)
}
</style>
