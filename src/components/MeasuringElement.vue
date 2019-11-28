<template>
  <div class="measuring_element">
    <h3>{{ this. name_ }}</h3>
    <p>STATUS{{ this.status}}</p>
    <div v-if='this.name_ == "Provider"'>
      <p>incoming water temperature[C]: {{ this.attr1_ }}</p>
      <p>outside temperature[C]: {{ this.attr2_ }}</p>
<!--      <p>warm water stream: </p>-->
    </div>
    <div v-if="this.name_ == 'Controller'">
      <p>valve: {{ this.attr1_ }}</p>
      <p>floating water temperature</p>
      <p>reference water temperature</p>
    </div>
    <div v-if="this.name_ == 'Heat Exchanger'">
      <p>supply temperature: {{ this.attr1_ }}</p>
      <p>return MPC temperature: {{ this.attr2_ }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeasuringElement",
  props: {
    name: String,
    status: String,
    attr1: Number,
    attr2: Number,
  },
  data(){
    return{
      name_: this.name,
      attr1_: this.attr1,
      attr2_: this.attr2
    }
  }
}
</script>

<style scoped>
.measuring_element {
  border: solid 1px black;
}
</style>
