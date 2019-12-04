<template>
  <div class="measuring_element">
    <h3 style="margin: 3px 0px; text-decoration: azure underline">{{ this.name}}</h3>
    <p class="status" v-if="this.status.toUpperCase() == 'RUN' || this.status.toUpperCase() == 'RUNNING'" style="color: green">{{ this.status.toUpperCase()}}</p>
    <p  class="status" v-else-if="this.status == 'temp error'" style="color: red">{{ this.status.toUpperCase()}}</p>
    <p  class="status" v-else style="color: yellow">UNKNOWN</p>
    <div v-if='this.name == "Provider"'>
      <div class="cell">
        <p class="textLeft">incoming water temperature[C]: </p>
        <p class="textRight"> {{ this.attr1 }}</p>
      </div>
      <div class="cell">
        <p class="textLeft">outside temperature[C]: </p>
        <p class="textRight"> {{ this.attr2 }}</p>
      </div>
    </div>
    <div v-if='this.name == "Controller"'>
      <div  class="cell">
        <p class="textLeft">valve: </p>
        <p class="textRight"> {{ this.valveStatus(this.attr1) }}</p>
      </div>
      <div  class="cell">
        <p class="textLeft">floating water temperature[C]: </p>
        <p class="textRight"> {{ this.attr2 }}</p>
      </div>
      <div  class="cell">
        <p class="textLeft">reference water temperature[C]: </p>
        <p class="textRight"> {{ this.attr3 }}</p>
      </div>
    </div>
    <div v-if="this.name == 'Heat Exchanger'">
      <div  class="cell">
        <p class="textLeft">supply temperature[C]: </p>
        <p class="textRight"> {{ this.attr1 }}</p>
      </div>
      <div  class="cell">
        <p class="textLeft">return MPC temperature[C]: </p>
        <p class="textRight"> {{ this.attr2 }}</p>
      </div>
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
.cell{
  display:inline-block;
  width: 100%;
  text-decoration: underline;
  margin: -5px 0px;
}
.textLeft {
  float: left;
  margin-left: 10px;
}

.textRight{
  float: right;
  margin-right: 10px;
}

.status{
  font-size: 20px;
}
</style>
