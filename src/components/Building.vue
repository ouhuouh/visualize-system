<template>
  <div class="building">
    <h2>{{ this.name }}</h2>
    <p v-if="this.status == 'heated' " style="color: #FF4515; font-size: 20px;">{{ this.status.toUpperCase()}}</p>
    <p v-else style="color: yellow">{{ this.status.toUpperCase()}}</p>
    <p>radiator temperature[C]: {{ this.rad_temp }}</p>
    <p>room temperature[C]: {{ this.room_temp }}</p>
    <p>water intake: {{ this.water_intake }}</p>
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
  border: solid 1px black;
  height: fit-content;
}
.building > * {
  margin-bottom: -2px;
  font-size: 1em
}
</style>
