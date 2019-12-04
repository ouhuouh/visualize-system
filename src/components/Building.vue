<template>
  <div class="building">
    <h2 style="text-decoration: underline">{{ this.name }}</h2>
    <p v-if="this.status == 'heated' " style="color: #FF4515; font-size: 20px; margin-bottom: 5px">{{ this.status.toUpperCase()}}</p>
    <p v-else style="color: yellow; font-size: 20px;  padding-bottom: 15px">UNKNOWN</p>
    <div class="cell">
      <p class="textLeft">radiator temperature[C]:</p>
      <p class="textRight"> {{ this.rad_temp }}</p>
    </div>
    <div class="cell">
      <p class="textLeft">room temperature[C]:</p>
      <p class="textRight"> {{ this.room_temp }}</p>
    </div>
    <div class="cell">
      <p class="textLeft">water intake:</p>
      <p class="textRight"> {{ this.water_intake }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Building",
    props: {
      name: String,
      status: String,
      room_temp: Number,
      water_intake: Number,
      rad_temp: Number
    }
  }
</script>

<style scoped>
.building {
  height: fit-content;
  margin-bottom: 10px;
}
.building > * {
  margin-bottom: -2px;
  font-size: 1em
}

.cell{
  display:inline-block;
  margin: -5px 10px;

}
.textLeft {
  float: left;
  margin-left: 10px;}

.textRight{
  float: right;
  margin-right: 10px;
}
</style>
