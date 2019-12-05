<template>
  <div class="measuring_element">
    <h3 style="margin: 3px 0px; text-decoration: azure underline">{{ this.name}}</h3>
    <p class="status" v-if="this.status.toUpperCase() == 'RUN' || this.status.toUpperCase() == 'RUNNING'" style="color: green">{{ this.status.toUpperCase()}}</p>
    <p class="status" v-else-if="this.ifError(this.status) == 'alarm'" style="color: red">{{ this.status.toUpperCase()}}</p>
    <p class="status" v-else-if="this.status.toUpperCase() == 'stopped'" style="color: orange">{{ this.status.toUpperCase()}}</p>
    <p  class="status" v-else style="color: yellow">UNKNOWN</p>
    <div v-if='this.name == "Provider"'>
      <div class="cell">
        <p class="textLeft">incoming water temperature[&deg;C]: </p>
        <p class="textRight"> {{ this.attr1 }}</p>
      </div>
      <div class="cell">
        <p class="textLeft">outside temperature[&deg;C]: </p>
        <p class="textRight"> {{ this.attr2 }}</p>
      </div>
    </div>
    <div v-if='this.name == "Controller"'>
      <div  class="cell">
        <p class="textLeft">valve: </p>
        <p class="textRight" v-if="this.valveStatus(this.attr1) == 'OPEN'"> {{ this.attr1 }}</p>
        <p class="textRight" v-else-if="this.valveStatus(this.attr1) == 'CLOSED'"> {{ this.valveStatus(this.attr1) }}</p>
        <p class="textRight" v-else style="color:red"> ERROR</p>
      </div>
      <div  class="cell">
        <p class="textLeft">floating water temperature[&deg;C]: </p>
        <p class="textRight"> {{ this.attr2 }}</p>
      </div>
      <div  class="cell">
        <p class="textLeft">reference water temperature[&deg;C]: </p>
        <p class="textRight"> {{ this.attr3 }}</p>
      </div>
    </div>
    <div v-if="this.name == 'Heat Exchanger'">
      <div  class="cell">
        <p class="textLeft">supply temperature[&deg;C]: </p>
        <p class="textRight"> {{ this.attr1 }}</p>
      </div>
      <div  class="cell">
        <p class="textLeft">return MPC temperature[&deg;C]: </p>
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
  methods: {
      valveStatus(number){
          if(number > 0 && number <= 1)
              return "OPEN";
          if(number === 0)
              return "CLOSED";
          console.log("Incorrect valve gap value!");
          return "ERROR";
      },
      ifError(status){
          let downStatus = status.toLowerCase();
          let num = downStatus.search("error");
          if(num!==-1)
              return "alarm";
          else
              return "good";
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
