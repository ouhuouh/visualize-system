<template>
  <div class="measuring_element">
    <h3>{{ this. name_ }}</h3>
    <div v-if='this.name_ == "Provider"'>
      <p>air temperature: {{ this.attr1_ }}</p>
      <p>water temperature: {{ this.attr2_ }}</p>
    </div>
    <div v-if="this.name_ == 'Controller'">
      <p>valve: {{ this.attr1_ }}</p>
      <p>water temperature: {{ this.attr2_ }}</p>
    </div>
    <div v-if="this.name_ == 'Heat Exchanger'">
      <p>valve: {{ this.attr1_ }}</p>
      <p>CO temperature: {{ this.attr2_ }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeasuringElement",
  props: {
    name: String,
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
