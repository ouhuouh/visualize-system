<template >
    <div class="measure_dash">
        <MeasuringElement :name="items[0].name" :attr1="items[0].attr1" :attr2="items[0].attr2"></MeasuringElement>
        <MeasuringElement :name="items[1].name" :attr1="items[1].attr1" :attr2="items[1].attr2"></MeasuringElement>
        <MeasuringElement :name="items[2].name" :attr1="items[2].attr1" :attr2="items[2].attr2"></MeasuringElement>
    </div>
</template>

<script>
import MeasuringElement from "./MeasuringElement";
export default {
  name: "MeasuringDashboard",
  components: {MeasuringElement},
  data() {
    return {
        items: [
            {name: "Provider", attr1: 14, attr2: 2},
            {name: "Controller", attr1: 0, attr2: 15},
            {name: "Heat Exchanger", attr1: 1, attr2: 16}
        ]
    }
  }
}
</script>

<style scoped>
.measure_dash {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
}
.measure_dash > * {
    width: 32%;
    align-self: center;
    padding: 50px 0px;
}
</style>
