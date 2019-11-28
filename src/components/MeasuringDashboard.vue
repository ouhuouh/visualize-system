<template >
    <div class="measure_dash">
        <MeasuringElement :name="items[0].name" :attr1="items[0].attr1" :attr2="items[0].attr2"></MeasuringElement>
        <MeasuringElement :name="items[1].name" :attr1="items[1].attr1" :attr2="items[1].attr2"></MeasuringElement>
        <MeasuringElement :name="items[2].name" :attr1="items[2].attr1" :attr2="items[2].attr2"></MeasuringElement>
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
    computed: mapGetters['getProvider_Fxm'],
watch: {
    getProvider_Tzm: function(){
       this.items[0].attr1 = this.getProvider_Tzm
    },
    getProvider_To: function(){
        this.items[0].attr2 = this.getProvider_To
    },
    getProvider_status: function(){
        this.items[0].status = this.getProvider_status
    }
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
        padding: 50px 0px;
        height: 60%;
        display: flex;
        flex-flow: column;
        justify-content: flex-end;
    }
}

.measure_dash > * {
    background: rgba(142, 142, 142, 0.77)
}
</style>
