<template>
  <div class="measuring_element">
    <h3>{{ this.name}}</h3>
    <p class="status" v-if="this.status.toUpperCase() == 'RUN' || this.status.toUpperCase() == 'RUNNING'" style="color: green">{{ this.status.toUpperCase()}}</p>
    <p  class="status" v-else-if="this.status == 'temp error'" style="color: red">{{ this.status.toUpperCase()}}</p>
    <p  class="status" v-else style="color: yellow">{{ this.status.toUpperCase()}}</p>
    <div v-if='this.name == "Provider"'>
      <p>incoming water temperature[C]: {{ this.attr1 }}</p>
      <p>outside temperature[C]: {{ this.attr2 }}</p>
<!--      <p>warm water stream: </p>-->
    </div>
    <div v-if="this.name == 'Controller'">
      <p>valve: {{ this.valveStatus(this.attr1) }} , {{ this.attr1 }}</p>
      <p>floating water temperature[C]: {{ this.attr2 }}</p>
      <p>reference water temperature[C]: {{ this.attr3 }}</p>
    </div>
    <div v-if="this.name == 'Heat Exchanger'">
      <p>supply temperature[C]: {{ this.attr1 }}</p>
      <p>return MPC temperature[C]: {{ this.attr2 }}</p>
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
    attr3: Number
  },
  data(){
    return{
      name_: this.name,
      attr1_: this.attr1,
      attr2_: this.attr2
    }
  },
  methods: {
      valveStatus(number){
          if(number > 0)
              return "OPEN";
          return "CLOSED";
      }
  }
}
</script>

<style scoped>
.measuring_element {
  border: solid 1px black;
}

.status{
  font-size: 20px;
}
</style>
